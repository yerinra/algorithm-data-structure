// 스택
// https://www.acmicpc.net/problem/10828

// 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 다섯 가지이다.

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

class Stack {
  constructor() {
    this.array = [];
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.array[this.size] = element;
  }

  pop() {
    if (this.isEmpty() == 1) {
      return -1;
    }
    let popped = this.array[this.size];
    delete this.array[this.size];
    this.size--;
    return popped;
  }

  top() {
    if (this.isEmpty() == 1) {
      return -1;
    }
    return this.array[this.size];
  }

  isEmpty() {
    return this.size == 0 ? 1 : 0;
  }

  length() {
    return this.size;
  }
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [, ...arr] = input;

  let s = new Stack();
  let answer = [];
  arr.forEach((v) => {
    if (v.split(" ")[0] == "push") {
      s.push(v.split(" ")[1]);
    } else if (v == "top") {
      answer.push(s.top());
    } else if (v == "size") {
      answer.push(s.length());
    } else if (v == "empty") {
      answer.push(s.isEmpty());
    } else if (v == "pop") {
      answer.push(s.pop());
    }
  });
  console.log(answer.join("\n"));
  process.exit();
});
