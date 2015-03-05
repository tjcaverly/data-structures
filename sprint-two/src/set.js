var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = new HashTable();
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage.insert(item, item);
};

setPrototype.contains = function(item){
	if (this._storage.retrieve(item) === item) {
		return true;
	} else return false;
};

setPrototype.remove = function(item){
	this._storage.remove(item);
};

/*
 * Complexity: What is the time complexity of the above functions?
 Time complexity of naive implementation
 .add is O(1)
 .contains is O(n)
 .remove is O(n)
 Time complexity of hash table implementation
 .add is O(1)
 .contains is O(1)
 .remove is O(1)
 */
