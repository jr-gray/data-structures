var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage.get(index))) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
	    if (this._storage.get(index)[i][0] === k) {
	      this._storage.get(index)[i] = [k, v];
	    }
	  }
  	this._storage.get(index).push([k, v]);
  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if (Array.isArray(this._storage.get(index))) {

  // go to index, iterate over arrays in that index looking for k === thatArray[0], return thatArray
  for (var i = 0; i < this._storage.get(index).length; i++) {
  	if (this._storage.get(index)[i][0] === k) {
  		return this._storage.get(index)[i][1];
  	}
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
  	if (this._storage.get(index)[i][0] === k) {
  		this._storage.get(index)[i].splice(i, 1);
  	}
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


