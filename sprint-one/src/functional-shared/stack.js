var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {count:0, storage:{}};

  _.extend(someInstance, stackMethods);
  console.log(someInstance);

  return someInstance;
};

var stackMethods = {
	push: function(value) {
		this.storage[this.count] = value;
		this.count++;
	},
	pop: function() {
		if (this.count>0) {
			this.count--;
			var temp = this.storage[this.count];
			delete this.storage[this.count];
			return temp;
		}
	},
	size: function() {
		console.log("this ", this, "size" + this.count);
		return this.count;
	}
};
