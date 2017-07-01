var BinarySearchTree = function(value) {
	this.value = value;
	this.left;
	this.right;
};

BinarySearchTree.prototype.insert = function(val) {
  if (val > this.value) {
    if (this.right === undefined) {
    	this.right = new BinarySearchTree(val);
    } else {
    	this.right.insert(val);
    }
  } else {
    if (this.left === undefined) {
    	this.left = new BinarySearchTree(val);
    } else {
    	this.left.insert(val);
    }
  }
};

BinarySearchTree.prototype.contains = function(val) {
	if (val === this.value) {
		return true;
	}

	if (val > this.value) {
		if (this.right === undefined) {
			return false;
		}
		return this.right.contains(val);
	} else {
		if (this.left === undefined) {
			return false;
		}
		return this.left.contains(val);
	}
  
};

BinarySearchTree.prototype.depthFirstLog = function(fn) {
	
	fn(this.value); 

	if (this.left !== undefined) {
		this.left.depthFirstLog(fn);
	}

	if (this.right !== undefined) {
		this.right.depthFirstLog(fn);
	}

};

/*
 * Complexity: What is the time complexity of the above functions?

 insert: O(log(n))
 contains: O(log(n))
 depthFirstLog: O(n)

 */
