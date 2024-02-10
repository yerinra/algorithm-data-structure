class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Dequeue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(value) {
    const newNode = new Node(value);
    if (this.getSize() === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  pushBack(value) {
    const newNode = new Node(value);

    if (this.getSize() === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  popFront() {
    if (this.getSize() === 0) {
      return -1;
    } else if (this.getSize() === 1) {
      const poppedItem = this.head.value;
      this.head = null;
      this.tail === nullthis.size--;
      return poppedItem;
    } else if (this.getSize() === 2) {
      const poppedItem = this.head.value;
      this.head = this.head.next;
      this.tail.prev = null;
      this.size--;
    } else if (this.getSize() > 2) {
      const poppedItem = this.head.value;
      this.head.prev = null;
      // this.head.next.prev = null ????
      this.head = this.head.next;
      this.size--;
      return poppedItem;
    }
  }
  popBack() {
    if (this.getSize() === 0) {
      return -1;
    } else if (this.getSize() === 1) {
      const poppedItem = this.tail.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return poppedItem;
    } else if (this.getSize() === 2) {
      const poppedItem = this.tail.value;
      this.tail = this.tail.prev;
      this.head.next = null;
      this.size--;
      return poppedItem;
    } else if (this.getSize() > 2) {
      const poppedItem = this.tail.value;
      this.tail.prev.next = null;
      //??
      this.tail = this.tail.prev;
      this.size--;
      return poppedItem;
    }
  }
  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.getSize() == 0 ? true : false;
  }

  getFront() {
    return this.getSize() ? this.head.item : -1;
  }

  getBack() {
    return this.getSize() ? this.tail.item : -1;
  }
}
