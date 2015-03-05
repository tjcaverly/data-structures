var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = new Node(value);
    if (this.tail === null) {
      this.head = this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function(){
    if (this.head !== null){
      var temp = this.head;
      var tempValue = temp.value;
      this.head = this.head.next;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
