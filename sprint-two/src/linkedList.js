var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      
      var current = list.head;
      while (current.next) {
        current = current.next;
      }
      current.next = Node(value);
      list.tail = current.next;

      /* tried to implement following to make addToTail constant time complexity instead of linear
 
      var current = list.tail;
      current.next = Node(value);
      list.tail = current.next;

      */

    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var temp = list.head.next;
      var formerHead = list.head;
      delete list.head;
      list.head = temp;
      return formerHead.value;
    }
    return null;
  };

  list.contains = function(target) {
    // iterate over list, if current value === target, return true, else check next
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: linear. Tried to refactor later to make it constant but ran out of time
 removeHead: constant O(1)
 contains: linear. Has to traverse entire list.
 */
