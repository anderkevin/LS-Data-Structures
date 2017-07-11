class Stack {
  constructor() {
    this.thestack = [];
  }
  add(value) {
    this.thestack.unshift(value);
  }
  remove() {
    if (this.thestack.length === 0) return null;
    return this.thestack.shift();
  }
  get size() {
    return this.thestack.length;
  }
}

module.exports = Stack;
