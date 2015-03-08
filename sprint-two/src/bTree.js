var BTree = function(order) {
	this._root = new BTreeNode(true);
	this._order = order;
};

var BTreeNode = function(leaf) {
	this.keys = [];
	this.children = [];
	this.leaf = leaf || false;
};

BTree.prototype.insert = function(key){
	var oldRoot = this._root;
	if (oldRoot.keys.length === 2*this._order-1) {
		var newRoot = new BTreeNode(false);
		this._root = newRoot;
		newRoot.children.push(oldRoot);
		this.splitChild(newRoot, 0, oldRoot);
		this.insertNonFull(newRoot, key);
	} else {
		this.insertNonFull(oldRoot, key);
	}
	debugger;
};

BTree.prototype.insertNonFull = function(currentNode, key) {
	var i = currentNode.keys.length - 1;
	if (currentNode.leaf) {
		while (i >= 0 && key < currentNode.keys[i]) {
			currentNode.keys[i+1] = currentNode.keys[i];
			i--;
		}
		currentNode.keys[i+1] = key;
	} else {
		while (i >= 0 && key < currentNode.keys[i]){
			i--;
		}
		var child = currentNode.children[i+1];
		if (child.keys.length === this._order * 2 - 1){
			debugger;
			this.splitChild(currentNode, i+1, child);
			debugger;
			if (key > currentNode.keys[i]){
				i++;
			}
		}
		this.insertNonFull(child, key);
	}
};

BTree.prototype.splitChild = function(currentParent, index, currentNode){
	var newNode = new BTreeNode(currentNode.leaf);
	newNode.keys = currentNode.keys.slice(this._order-1);
	currentNode.keys = currentNode.keys.slice(0, this._order-1);
	if (!currentNode.leaf) {
		newNode.children = currentNode.children.slice(0, this._order);
		currentNode.children = currentNode.children.slice(this._order);
	}
	currentParent.children.splice(index+1, 0, newNode);
	currentParent.keys.splice(index+1, 0, newNode.keys.shift());

};

BTree.prototype.contains = function(key){
	var nodeContains = function(node){
		var i = 0;
		while(i < node.keys.length && key > node.keys[i]) {
			i++;
		}	
		if (i < node.keys.length && key === node.keys[i]){
			return true;
		}
		if (node.leaf) {
			return false;
		} else {
			return nodeContains(node.children[i]);
		}
	}
	return nodeContains(this._root);
};

BTree.prototype.remove = function(value){

};