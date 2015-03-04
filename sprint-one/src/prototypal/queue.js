var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.start = 0;
  newQueue.end = 0;
  newQueue.storage = {};

  return newQueue;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.end] = value;
	this.end++;
}

queueMethods.dequeue = function() {
	if (this.end > this.start) {
		var temp = this.storage[this.start];
		delete this.storage[this.start];
		this.start++;
		return temp;
	}
}

queueMethods.size = function() {
	return this.end - this.start;
}


