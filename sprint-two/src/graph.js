// Instantiate a new graph
var Graph = function(node) {
	this[node] = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.hasOwnProperty(node)) {
    return true;
  }
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  delete this[node];

  for (var key in this) {
  	if (key[node]) {
  		delete key[node];
  	}
  } 
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	if (this[fromNode] && this[toNode]) {
		if (this[fromNode][toNode] && this[toNode][fromNode]) {
  	  return true;
    }
	}
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	if (this[fromNode] && this[toNode]) {
    this[fromNode][toNode] = true;
    this[toNode][fromNode] = true;
	} else {
		throw Error;
	}
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this[fromNode] && this[toNode]) {
    delete this[fromNode][toNode];
    delete this[toNode][fromNode];
	} else {
		throw Error;
	}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (key in this) {
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?

 addNode: O(1)
 contains: O(1)
 removeNode: O(n), the deletion itself is constant, but it has to search every key for edges, so the function is linear.
 hasEdge: O(1) - object lookup
 addEdge: O(1)
 removeEdge: O(1)
 forEachNode: O(n), has to iterate over each node.

 */


