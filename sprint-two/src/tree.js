var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var newTree = Tree(value);
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
