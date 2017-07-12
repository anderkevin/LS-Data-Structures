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
  contains(thing) {
    let container = false;
    let placeholder = this.head;
    for (let i = 0; i < this.length; i++) {
      if (thing === placeholder.value) container = true;
      placeholder = placeholder.next;
    }
    return container;
  }
}

module.exports = LinkedList;
