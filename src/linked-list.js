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
    const originalHead = this.head;
    this.head = this.head.next;
    return originalHead;
  }
  contains() {
    return this.tail;
    // for (let i = 0; i < this.length; i++) {
      // if () {
        // return true;
      // }
    // }
  }
}

module.exports = LinkedList;
