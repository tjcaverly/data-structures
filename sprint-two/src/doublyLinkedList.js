var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = new Node(value);
    if (this.tail === null) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.addToHead = function(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  };

  list.removeHead = function(){
    if (this.head !== null){
      var temp = this.head;
      var tempValue = temp.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      delete temp;
      return tempValue;
    }
  };

  list.removeTail = function() {
    if (this.tail !== null) {
      var temp = this.tail;
      var tempValue = temp.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      }
      delete temp;
      return tempValue;
    }
  };

  list.contains = function(target){
    var nodeContains = function(node) {
      if (node === null) {
        return false;
      } else {
        if (node.value === target) {
          return true;
        } else {
          return nodeContains(node.next);
        }
      }
    };
    return nodeContains(this.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 .addToTail is O(1)
 .removeHead is O(1)
 .contains is O(n)
 */
