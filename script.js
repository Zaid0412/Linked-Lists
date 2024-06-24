class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head_ = null;
  }

  // Inserting new Node at end of list
  append(value) {
    let node = new Node(value);
    let current;

    // If list is empty, make it the head_
    if (!this.head_) {
      this.head_ = node;
    } else {
      current = this.head_;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
  }

  // Inserting new Node at beginning of list
  prepend(value) {
    this.head_ = new Node(value, this.head_);
  }

  // Returns total number of Nodes in list
  get size() {
    let current = this.head_;
    let i = 0;
    while (current) {
      current = current.nextNode;
      i++;
    }
    return i;
  }

  // Returns the first node of the list
  get head() {
    return this.head_;
  }

  // Returns the last node of the list
  get tail() {
    let current = this.head_;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  // Returns the node at the given index
  at(index) {
    let current = this.head_;
    let i = 0;

    while (current) {
      i++;
      if (i - 1 == index) {
        return current;
      }
      current = current.nextNode;
    }
  }

  // Removes the last element from the Node
  pop() {
    let current = this.head_;

    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
    console.log(current);
  }

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let current = this.head_;
    while (current) {
      if (current.value == value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  // Returns the index of the node containing value, or null if not found
  find(value) {
    let current = this.head_;
    let i = 0;
    while (current) {
      if (current.value == value) {
        return i;
      }
      current = current.nextNode;
      i++;
    }
    return -1;
  }

  // Returns all Nodes in list as strings
  get toString() {
    let current = this.head_;
    let allNodes = [];

    while (current) {
      allNodes.push(current);

      current = current.nextNode;
    }
    const toStringList = allNodes
      .map((node) => `(${node.value}) -> `)
      .join("")
      .concat("null");

    return toStringList;
  }

  // Loops over the Linked List and prints all of the Nodes' data
  printListData() {
    let current = this.head_;

    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }
}
