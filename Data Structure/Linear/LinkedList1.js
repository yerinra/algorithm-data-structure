// data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.size = function () {
  return this.length;
};

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

/* TC */
let ll = new LinkedList();
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log(ll);
