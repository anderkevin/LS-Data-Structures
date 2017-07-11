class Queue {
  constructor() {
    this.thequeue = [];
  }
  enqueue(value) {
    this.thequeue.unshift(value);
  }
  dequeue() {
    if (this.thequeue.length === 0) return null;
    return this.thequeue.pop();
  }
  get size() {
    return this.thequeue.length;
  }
}


module.exports = Queue;
