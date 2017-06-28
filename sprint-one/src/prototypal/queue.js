var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(queueMethods);
  obj.currentSize = 0;
  return obj;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this[this.currentSize] = value;
	this.currentSize++;
};

queueMethods.dequeue = function() {
	if (this.currentSize > 0) {
		var temp = this[0];
		for (var i = 0; i < this.currentSize-1; i++) {
			this[i] = this[i+1];
		}
		this.currentSize--;
		delete this[this.currentSize]
		return temp;
	}
	return null;
};

queueMethods.size = function() {
	return this.currentSize;
};