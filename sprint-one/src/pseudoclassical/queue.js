var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.currentSize = 0;
};

Queue.prototype.enqueue = function(value) {
	this[this.currentSize] = value;
	this.currentSize++;
};

Queue.prototype.dequeue = function() {
	if (this.currentSize > 0) {
		var temp = this[0];
		for (var i = 0; i < this.currentSize-1; i++) {
			this[i] = this[i+1];
		}
		this.currentSize--;
		delete this[this.currentSize];
		return temp;
	}
	return null;
};

Queue.prototype.size = function() {
	return this.currentSize;
};