const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  // adding an element to the top of the stack
  push(element) {
    this.stack.push(element);
  }

  // removes and returns the top element of the stack
  pop() {
    return this.stack.pop();
  }

  // returns the top element of the stack, but does not remove it
  peek() {
    return this.stack[this.stack.length - 1];
  }
}


module.exports = {
  Stack
};
