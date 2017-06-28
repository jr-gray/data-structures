var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      delete storage[0];
      for (var i = 1; i <= size; i++) {
        Object.defineProperty(storage, i-1, Object.getOwnPropertyDescriptor(storage, i));
      }
      size--;
    }
    return null;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};



  Object.defineProperty(storage, i-1,
      Object.getOwnPropertyDescriptor(storage, i));


// { 0 : 'bob', -> delete
//   1 : 'jim', -> 
//   2 : 'joe',
//   3 : 'sue'}

// size = 4

// { 1 : 'jim', 
//   2 : 'joe',
//   3 : 'sue'}

// dequeue 

// { 0 : 'jim',
//   1 : 'joe',
//   2 : 'sue'}

// size = 3