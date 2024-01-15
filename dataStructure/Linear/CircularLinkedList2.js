// data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// head와 length 를 가지고 있는 객체
function CircularLinkedList() {
  this.head = null;
  this.length = 0;
}

// 연결 리스트 내 노드 개수 확인
CircularLinkedList.prototype.size = function () {
  return this.length;
};

// 객체 내 노드 존재 여부 파악
CircularLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// 노드 출력
CircularLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");

  if (this.length != 0) {
    process.stderr.write(`${this.head.data} -> `);
    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
  }
  console.log("null");
};

// 연결 리스트 가장 끝에 노드 추가
CircularLinkedList.prototype.append = function (value) {
  let node = new Node(value);
  let current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != this.head) {
      current = current.next;
    }
    current.next = node;
  }
  node.next = this.head;
  this.length++;
};

/* TC */
let cll = new CircularLinkedList();

cll.append(1);
cll.append(10);
cll.append(100);

cll.printNode();
console.log(cll.size());
