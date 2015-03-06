var BloomFilter = function() {
	this._storage = Array.apply(null, new Array(18)).map(Number.prototype.valueOf,0);
	// k=3, m=18
};


BloomFilter.prototype.insert = function(value){
	var storage = this._storage;
	_.each(getThreeKeys(JSON.stringify(value)), function(index) {
		storage[index] = 1;
	});
};

BloomFilter.prototype.contains = function(value){
	var storage = this._storage;
	return _.all(getThreeKeys(JSON.stringify(value)), function(index){
		return (storage[index] === 1);
	});
};

var getThreeKeys = function(str) {
	var hash = Sha1.hash(str);
	var indices = [];
	for (var i = 0; i<3 ; i++){
		indices.push(parseInt(hash.slice(i*13,(i+1)*13), 16)%18);
	}
	return indices;
};
