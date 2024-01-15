// 카드 2
// https://www.acmicpc.net/problem/2164

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
function Node(data) {
  this.data = data;
  this.next = null;
}

function Queue() {
  this.tail = null;
  this.head = null;
  this.length = 0;
}

Queue.prototype.enqueue = function (value) {
  let node = new Node(value);

  if (this.head == null) {
    this.head = node;
    this.head.next = null;
  } else {
    this.tail.next = node;
  }
  this.tail = node;
  this.length++;
  return true;
};

Queue.prototype.dequeue = function () {
  if (this.isEmpty() == 1) return -1;
  const element = this.head;
  this.head = this.head.next;
  this.length--;
  return element.data;
};

Queue.prototype.size = function () {
  return this.length;
};

Queue.prototype.isEmpty = function () {
  return this.size() == 0 ? 1 : 0;
};

Queue.prototype.front = function () {
  return this.isEmpty() == 1 ? -1 : this.head.data;
};

Queue.prototype.back = function () {
  return this.isEmpty() == 1 ? -1 : this.tail.data;
};

rl.on("line", (line) => {
  input = line;
}).on("close", () => {
  let q = new Queue();
  let answer = [];
  for (let i = 1; i <= input; i++) {
    q.enqueue(i);
  }

  while (q.size() > 1) {
    q.dequeue();
    let n = q.dequeue();
    q.enqueue(n);
  }

  console.log(q.head.data);

  process.exit();
});
