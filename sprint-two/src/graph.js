// Instantiate a new graph
var Graph = function(node) {
	this.nodes = [];
	this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	if (this.nodes.length > 0) {
		for (var i= 0; i < this.nodes.length; i++) {
			if (this.nodes[i] === node) {
				return true;
			} else {
				return false;
			}
		}
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	for (var i = 0; i < this.nodes.length; i++) {
		if (this.nodes[i] === node) {
		  this.nodes.splice(i, 1);
	  }
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	if (this.edges.length > 0) {
		
		for (var i = 0; i < this.edges.length; i++) {
			if (this.edges[i].indexOf(fromNode) > -1) {
				if (this.edges[i].indexOf(toNode) > -1) {
					return true;
				}
			}
		}
	}
	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
		if (this.edges.length > 0) {
		
		for (var i = 0; i < this.edges.length; i++) {
			if (this.edges[i].indexOf(fromNode) > -1) {
				if (this.edges[i].indexOf(toNode) > -1) {
					this.edges.splice(i, 1);
				}
			}
		}
	}
	return null;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


