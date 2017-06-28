var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.currentSize = 0;
  return storage;
};

var stackMethods = {

  push : function(value) {
  	this[this.currentSize] = value;
  	this.currentSize++;
  },

  pop : function() {
  	if (this.currentSize > 0) {
  		this.currentSize--;
  		var lastElement = this[this.currentSize];
  		delete this[this.currentSize];
  		return lastElement;
  	}
  	return null;
  },

  size : function() {
  	return this.currentSize;
  }

};