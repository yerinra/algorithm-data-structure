// 덱 2
// https://www.acmicpc.net/problem/28279

/*
1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
5: 덱에 들어있는 정수의 개수를 출력한다.
6: 덱이 비어있으면 1, 아니면 0을 출력한다.
7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.
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
  this.prev = null;
}

function Deque() {
  this.tail = null;
  this.head = null;
  this.length = 0;
}

Deque.prototype.insert = function (value, type) {
  let node = new Node(value);

  if (this.length == 0) {
    this.head = node;
    this.tail = node;
    this.length++;
  } else {
    if (type == "front") {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else if (type == "end") {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  return true;
};

Deque.prototype.shift = function () {
  if (this.isEmpty() == 1) return -1;
  const element = this.head;
  this.head = this.head.next;
  this.length--;
  return element.data;
};

Deque.prototype.pop = function () {
  if (this.isEmpty() == 1) return -1;
  const element = this.tail;
  this.tail = this.tail.prev;
  this.length--;
  return element.data;
};

Deque.prototype.size = function () {
  return this.length;
};

Deque.prototype.isEmpty = function () {
  return this.size() == 0 ? 1 : 0;
};

Deque.prototype.front = function () {
  return this.isEmpty() == 1 ? -1 : this.head.data;
};

Deque.prototype.back = function () {
  return this.isEmpty() == 1 ? -1 : this.tail.data;
};

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [, arr] = input;
  let dq = new Deque();
  let answer = [];

  arr.forEach((v) => {
    if (v.split(" ")[0] == 1) {
      dq.insert(v.split(" ")[1], "front");
    } else if (v.split(" ")[0] == 2) {
      dq.insert(v.split(" ")[1], "end");
    } else if (v == 3) {
      answer.push(dq.shift());
    } else if (v == 4) {
      answer.push(dq.pop());
    } else if (v == 5) {
      answer.push(dq.size());
    } else if (v == 6) {
      answer.push(dq.isEmpty());
    } else if (v == 7) {
      answer.push(dq.front());
    } else if (v == 8) {
      answer.push(dq.back());
    }
  });

  console.log(answer.join("\n"));

  process.exit();
});
