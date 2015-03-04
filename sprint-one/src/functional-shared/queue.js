var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {begin:0, end:0, storage:{}};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.end] = value;
		this.end++;
	},
	dequeue: function() {
		if (this.end > this.begin){
			var temp = this.storage[this.begin];
			delete this.storage[this.begin];
			this.begin++;
			return temp;
		}
	},
	size: function() {
		return this.end - this.begin;
	}
};



