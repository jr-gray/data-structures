var Set = function() {
	var set = Object.create(setPrototype);
	set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this._storage[item] = item;
};

setPrototype.contains = function(item) {
	return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
	delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
with array implementation:

 add: O(1), utilizes array.push
 contains: O(n)
 remove: O(n)

with hash table implementation:

 add. O(1)
 contains: O(1)
 remove: O(1)

 */