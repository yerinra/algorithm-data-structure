// data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// head와 length 를 가지고 있는 객체
function CirculatLinkedList() {
  this.head = null;
  this.length = 0;
}

// 연결 리스트 내 노드 개수 확인
CirculatLinkedList.prototype.size = function () {
  return this.length;
};

// 객체 내 노드 존재 여부 파악
CirculatLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

/* TC */
let cll = new CirculatLinkedList();
let node;
console.log(cll);

node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length++;
console.log(cll);

node = new Node(456);
node.next = cll.head.next;
cll.head.next = node;
cll.length++;
console.log(cll);
