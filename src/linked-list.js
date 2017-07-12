class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(stuff) {
    const node = {
      value: stuff,
      next: null
    };
    if (this.head === null) this.head = node;
    else {
      this.head.next = node.value;
    }
    this.tail = node;
  }
  removeHead() {
    const originalHead = this.head.value;
    this.head.value = this.head.next;
    return originalHead;
  }
  contains() {
    for (let i = 0; i < this.length; i++) {
      return true;
    }
  }
  }
module.exports = LinkedList;
