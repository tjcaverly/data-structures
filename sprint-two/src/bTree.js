var BTree = function(lowerLimit) {
	this._root = null;
	this._lowerLimit = lowerLimit;
	this._upperLimit = 2*lowerLimit;
};

var BTreeNode = function() {
	this.keys = [];
	this.children = [];
};

BTree.prototype.insert = function(value){

};

BTree.prototype.insertNonFull = function(foo, bar) {

};

BTree.prototype.contains = function(value){

};

BTree.prototype.remove = function(value){

};