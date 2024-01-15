// 큐 2
// https://www.acmicpc.net/problem/18258

/*
push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 */

/* 시간 초과 풀이
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [, ...arr] = input;
  let q = [];
  let answer = [];

  arr.forEach((v) => {
    if (v.split(" ")[0] == "push") {
      q.push(+v.split(" ")[1]);
      return;
    }

    else if (v == "pop") {
      if (q.length == 0) {
        answer.push(-1);
        return;
      } else {
        answer.push(q.shift());
        return;
      }
    }

    else if (v == "size") {
      answer.push(q.length);
      return;
    }

    else if (v == "empty") {
      answer.push(q.length == 0 ? 1 : 0);
      return;
    }

    else if (v == "front") {
      answer.push(q.length == 0 ? -1 : q[0]);
      return;
    }

    else if (v == "back") {
      answer.push(q.length == 0 ? -1 : q[q.length - 1]);
      return;
    }
  });

  console.log(answer.join("\n"));
  process.exit();
});
*/

// 단방향 링크드 리스트로 큐 구현.
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
  input.push(line);
}).on("close", () => {
  let [, ...arr] = input;
  let q = new Queue();
  let answer = [];

  arr.forEach((v) => {
    if (v.split(" ")[0] == "push") {
      q.enqueue(+v.split(" ")[1]);
    } else if (v == "pop") {
      answer.push(q.dequeue());
    } else if (v == "size") {
      answer.push(q.size());
    } else if (v == "empty") {
      answer.push(q.isEmpty() ? 1 : 0);
    } else if (v == "front") {
      answer.push(q.front());
    } else if (v == "back") {
      answer.push(q.back());
    }
  });

  console.log(answer.join("\n"));

  process.exit();
});
