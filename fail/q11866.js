// 요세푸스 문제 0
// https://www.acmicpc.net/problem/11866
/*
요세푸스 문제는 다음과 같다.

1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.

N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

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
  input = line.split(" ").map((el) => +el);
}).on("close", () => {
  const a = +input[0];
  const b = +input[1];
  let answer = [];
  let q = new Queue();
  for (let i = 1; i <= a; i++) {
    q.enqueue(i);
  }

  let start = 1;
  while (q.size() !== 0) {
    let temp = q.dequeue();
    if (start < b) {
      q.enqueue(temp);
      start++;
    } else {
      answer.push(temp);
      start = 1;
    }
  }

  console.log("<" + answer.join(", ") + ">");
  process.exit();
});
