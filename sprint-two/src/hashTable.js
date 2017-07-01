var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); // bucket is undefined if nothing has been inserted, else it's an array of arrays.

  if (Array.isArray(bucket)) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        return;
      }
    }
  	bucket.push([k, v]);
  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
  	if (bucket[i][0] === k) {
  		return bucket[i][1];
  	}
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
  	if (bucket[i][0] === k) {
  		bucket[i].splice(i, 1);
      return;
  	}
  }
};



/*
 * Complexity: What is the time complexity of the above functions?

 HashTable insert: O(n) or constant. The function goes to the specific bucket immediately because it's in an array (location is known).
  Then if the key exists already, it gets removed. Finally, the new key:value is pushed to the end, which is constant time.

 HashTable retrieve: O(n) / constant. Goes to specific bucket and loops over it, retrieving the key:value if it exists.

 HashTable remove: Same as the two above.
 */
