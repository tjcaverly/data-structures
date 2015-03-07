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
		var child_i = currentNode.children[i];
		if (child_i.keys.length === this._order * 2 - 1){
			this.splitChild(currentNode, i, child_i);
			if (key > currentNode.keys[i]){
				i++;
			}
		}
		this.insertNonFull(child_i, key);
	}
};

BTree.prototype.splitChild = function(currentParent, index, currentNode){
	var newNode = new BTreeNode(currentNode.leaf);
	newNode.keys = currentNode.keys.slice(0, this._order);
	currentNode.keys = currentNode.keys.slice(this._order);
	if (!currentNode.leaf) {
		newNode.children = currentNode.children.slice(0, this._order);
		currentNode.children = currentNode.children.slice(this._order);
	}
	currentParent.children.splice(index+1, 0, newNode);
	currentParent.keys.splice(index, 0, currentNode.keys.shift());

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
	}
	return nodeContains(this.root);
};

BTree.prototype.remove = function(value){

};