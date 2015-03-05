var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._filled = 0;

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === null || this._storage.get(i) === undefined){
  	this._storage.set(i, [[k,v]]);
  } else {
  	this._storage.get(i).push([k,v]);
  }	
  this._filled++;
  if (this._filled >= .75 * this._limit) {
    this._newLimit(this._limit * 2);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var retrieved = this._storage.get(i);
  if (!retrieved){
    return null;
  }
  for (var j=0; j<retrieved.length; j++) {
  	if (retrieved[j][0]===k) {
  		return retrieved[j][1];
  	}
  }
  return null;
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var retrieved = this._storage.get(i);
  if (!retrieved){
    return;
  }
  for (var j=0; j<retrieved.length; j++) {
  	if (retrieved[j][0]===k) {
  		retrieved.pop(j);
      this._filled--;
  	}
  }
  if (this._filled < .25 * this._limit && this._limit > 1) {
    this._newLimit(Math.floor(this._limit/2));
  }

};

HashTable.prototype._newLimit = function(limit) {
  var hashTable = this;
  var oldArray = this._storage;
  this._storage = LimitedArray(limit);
  this._filled = 0;
  this._limit = limit;
  oldArray.each(function(array){
    _.each(array, function(keyValuePair){
      hashTable.insert(keyValuePair[0], keyValuePair[1]);
    });
  });

}



/*
 * Complexity: What is the time complexity of the above functions?
 * .insert is O(1)
 * .retrieve is O(1)
 * .remove is O(1)
 */
