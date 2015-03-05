var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
	var newTree = Tree(value);
	newTree.parent = this;
	this.children.push(newTree);
};

treeMethods.contains = function(target){
	var nodeContains = function(node) {
		if (node === null) {
			return false;
		} else {
			if (node.value === target) {
				return true;
			} else {
				return _.some(node.children, nodeContains);
			}
		}
	};
	return nodeContains(this); 
};

treeMethods.removeFromParent = function(){
	if (this.parent){
	this.parent.children.pop(_.indexOf(this.parent.children, this));
	this.parent = null;
	}
};

treeMethods.traverse = function(cb) {
	var nodeTraverse = function(node) {
		if (node !== null) {
			cb(node.value);
			_.each(node.children, nodeTraverse);
		}
	};
	nodeTraverse(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 .addChild is O(1)
 .contains is O(n)
 */
