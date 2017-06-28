var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.currentSize = 0;
  _.extend(storage, stackMethods);
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
      var temp = this[this.currentSize];
      delete this[this.currentSize];
      return temp;
    }
	  return null;
	},

	size : function() { 
		return this.currentSize; 
	}

};



