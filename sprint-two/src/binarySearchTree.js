var BinarySearchTree = function(value){

	var obj = Object.create(BinarySearchTree.prototype);

	obj.left = null;
	obj.right = null;
	obj.value = value;

	return obj;

};


BinarySearchTree.prototype.insert = function(value){
	if (value <= this.value) {
		if (this.left === null) {
			this.left = BinarySearchTree(value);
		} else {
			this.left.insert(value);
		}
	} else {
		if (this.right === null) {
			this.right = BinarySearchTree(value);
		} else {
			this.right.insert(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(n) in worst case, O(log(n)) in balanced tree
 contains = O(n) in worst case, O(log(n)) in balanced tree
 depthFirstLog = O(n);
 */
