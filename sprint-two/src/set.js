var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage.push(item);
};

setPrototype.contains = function(item){
	return _.contains(this._storage,item);
};

setPrototype.remove = function(item){
	this._storage.pop(_.indexOf(this._storage,item));
};

/*
 * Complexity: What is the time complexity of the above functions?
 .add is O(1)
 .contains is O(n)
 .remove is O(n)
 */
