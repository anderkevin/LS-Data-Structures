class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(stuff) {
    const thingtoadd = {
      stuff,
      next: null
    };
    if (this.head === null) this.head = thingtoadd;
    this.tail.next = thingtoadd;
    this.tail = thingtoadd;
  }
  removeHead() {
    this.head = this.head.next;
  }
  contains() {
    return this.head;
  }
}

module.exports = LinkedList;
