// index 로 Queue 구현
// shift는 O(n), index는 O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  getSize() {
    return this.size;
  }

  // 큐에서 pop이면 앞에서 빼는 것.
  pop() {
    if (this.size === 0) return -1;
    if (this.size === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }
    if (this.size === 2) {
      const value = this.head.value;
      const newHead = this.head.next;
      this.head = newHead;
      this.tail = newHead;
      this.size--;
      return value;
    }
    if (this.size > 2) {
      const value = this.head.value;
      const newHead = this.head.next;
      this.head = newHead;
      this.size--;
      return value;
    }
  }

  isEmpty() {
    return this.size === 0 ? true : false;
    // this.size === 0 ? 0 : 1;
  }

  front() {
    return this.head ? this.head.value : undefined;
  }

  back() {
    return this.tail ? this.tail.value : undefined;
  }
}
