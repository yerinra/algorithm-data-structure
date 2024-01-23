// 배열 내장 함수 push, pop을 사용하지 않고 스택 구현.

class Stack {
  constructor() {
    this.array = [];
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.array[this.size] = element;
  }

  pop() {
    if (this.size == 0) {
      return undefined;
    }

    let popped = this.array[this.size];
    delete this.array[this.size];
    this.size--;
    return popped;
  }

  top() {
    if (this.size == 0) {
      return undefined;
    }
    return this.array[this.size];
  }

  isEmpty() {
    return this.size == 0 ? true : false;
  }

  length() {
    return this.size;
  }
}
