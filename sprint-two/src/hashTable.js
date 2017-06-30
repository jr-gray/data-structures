var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexVal = this._storage.get(index);

  if (Array.isArray(indexVal)) {
    for (var i = 0; i < indexVal.length; i++) {
	    if (indexVal[i][0] === k) {
	      indexVal[i] = [k, v];
	    }
	  }
  	indexVal.push([k, v]);
  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexVal = this._storage.get(index);

  for (var i = 0; i < indexVal.length; i++) {
  	if (indexVal[i][0] === k) {
  		return indexVal[i][1];
  	}
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexVal = this._storage.get(index);

  for (var i = 0; i < indexVal.length; i++) {
  	if (indexVal[i][0] === k) {
  		indexVal[i].splice(i, 1);
  	}
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


