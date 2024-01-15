// data 와 point인 next, prev를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

// head, tail, length 를 가지고 있는 객체
function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// 연결 리스트 내 노드 개수 확인
DoubleLinkedList.prototype.size = function () {
  return this.length;
};

// 연결 리스트 내 노드 존재 여부 파악
DoubleLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// 노드 정방향 출력
DoubleLinkedList.prototype.printNode = function () {
  process.stdout.write("head => ");
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} => `);
  }
  console.log(null);
};

// 노드 역방향 출력
DoubleLinkedList.prototype.printNodeInverse = function () {
  let temp = [];

  process.stdout.write("null <= ");
  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <= `);
  }
  console.log("tail");
};

// 연결 리스트 가장 끝에 노드 추가
DoubleLinkedList.prototype.append = function (value) {
  let node = new Node(value);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.length++;
};

// position 위치에 노드 추가
DoubleLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    // 맨 앞에 추가
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
  } else if (position === this.length) {
    // 맨 뒤에 추가
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tail = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    current.prev = node;

    node.prev = prev;
    prev.next = node;
  }
  this.length++;

  return true;
};

// value 데이터를 찾아 노드 삭제
DoubleLinkedList.prototype.remove = function (value) {
  let current = this.head;
  let prev = current;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (current === this.tail) {
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    prev.next = current.next;
    current.next.prev = prev;
  }
  this.length--;
  return current.data;
};

// position 위치 노드 삭제
DoubleLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (position === this.length - 1) {
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;

  return current.data;
};

/* TC */
let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);

dll.printNode();
dll.printNodeInverse();

console.log(dll.removeAt(1));
dll.printNode();
dll.printNodeInverse();

console.log(dll.removeAt(1000));
dll.printNode();
dll.printNodeInverse();
