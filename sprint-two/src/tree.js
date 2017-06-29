var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(value);
};

treeMethods.contains = function(target) {
	
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
