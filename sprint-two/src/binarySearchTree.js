var BinarySearchTree = function(value){

	var obj = Object.create(BinarySearchTree.prototype);

	obj.left = null;
	obj.right = null;
	obj.value = value;
	obj.minDepthFloor = 1;

	return obj;

};


BinarySearchTree.prototype.insert = function(value){
	var count = 1;
	var recurseInsert = function(node) {
		count++;
		if (value <= node.value) {
			if (node.left === null) {
				node.left = BinarySearchTree(value);
			} else {
				recurseInsert(node.left);
			}
		} else {
			if (node.right === null) {
				node.right = BinarySearchTree(value);
			} else {
				recurseInsert(node.right);
			}
		}
	};
	recurseInsert(this);
	if (count > 2 * this.minDepthFloor) {
		this.minDepthFloor = this.getMinDepth();
		if (count > 2 * this.minDepthFloor) {
			this.balance();
		}
	}
};

BinarySearchTree.prototype.contains = function(value){
	if (value === this.value) {
		return true;
	} else if (value < this.value) {
		if (this.left === null) {
			return false;
		} else {
			return this.left.contains(value);
		}
	} else if (value > this.value) {
		if (this.right === null) {
			return false;
		} else {
			return this.right.contains(value);
		}
	}
};

BinarySearchTree.prototype.depthFirstLog = function(cb){
	cb(this.value);
	if (this.left) {
		this.left.depthFirstLog(cb);
	} 
	if (this.right){
		this.right.depthFirstLog(cb);
	}
};

BinarySearchTree.prototype.breadthFirstLog = function(cb){
	var queue = [this];
	while (queue.length !== 0) {
		var currentNode = queue.shift();
		cb(currentNode.value);
		if (currentNode.left) {
			queue.push(currentNode.left);
		}
		if (currentNode.right) {
			queue.push(currentNode.right);
		}
	}
};

BinarySearchTree.prototype.balance = function() {
	var sorted = [];
	var traverse = function(node) {
		if (node.left) {
			traverse(node.left);
		}
		sorted.push(node.value);
		if (node.right) {
			traverse(node.right);
		}
	}
	traverse(this);

	var makeBalanced = function(array){

		var leftPart = array.slice(0,array.length/2);
		var rightPart = array.slice(array.length/2);
		var median = rightPart.shift();

		var newTree = BinarySearchTree(median);

		if (leftPart.length > 0){
			newTree.left = makeBalanced(leftPart);
		}
		if (rightPart.length > 0){
			newTree.right = makeBalanced(rightPart);
		}
		return newTree;
	}

	var newTree = makeBalanced(sorted);
	this.left = newTree.left;
	this.right = newTree.right;
	this.value = newTree.value;

};

BinarySearchTree.prototype.getMinDepth = function(){
	var queue = [[this, 1]];
	while (queue.length !== 0) {
		var currentPair = queue.shift();
		var currentDepth = currentPair[1];
		var currentNode = currentPair[0];
		if (!currentNode.left || !currentNode.right) {
			return currentDepth;
		}
		if (currentNode.left) {
			queue.push([currentNode.left, currentDepth+1]);
		}
		if (currentNode.right) {
			queue.push([currentNode.right, currentDepth+1]);
		}
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(n) in worst case, O(log(n)) in balanced tree
 contains = O(n) in worst case, O(log(n)) in balanced tree
 depthFirstLog = O(n);
 */
