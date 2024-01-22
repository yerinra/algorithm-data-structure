// queuestack
// https://www.acmicpc.net/problem/24511

/*
한가롭게 방학에 놀고 있던 도현이는 갑자기 재밌는 자료구조를 생각해냈다. 그 자료구조의 이름은 queuestack이다.

queuestack의 구조는 다음과 같다. 
$1$번, 
$2$번, ... , 
$N$번의 자료구조(queue 혹은 stack)가 나열되어있으며, 각각의 자료구조에는 한 개의 원소가 들어있다.

queuestack의 작동은 다음과 같다.

 
$x_0$을 입력받는다.
 
$x_0$을 
$1$번 자료구조에 삽입한 뒤 
$1$번 자료구조에서 원소를 pop한다. 그때 pop된 원소를 
$x_1$이라 한다.
 
$x_1$을 
$2$번 자료구조에 삽입한 뒤 
$2$번 자료구조에서 원소를 pop한다. 그때 pop된 원소를 
$x_2$이라 한다.
...
 
$x_{N-1}$을 
$N$번 자료구조에 삽입한 뒤 
$N$번 자료구조에서 원소를 pop한다. 그때 pop된 원소를 
$x_N$이라 한다.
 
$x_N$을 리턴한다.
도현이는 길이 
$M$의 수열 
$C$를 가져와서 수열의 원소를 앞에서부터 차례대로 queuestack에 삽입할 것이다. 이전에 삽입한 결과는 남아 있다. (예제 
$1$ 참고)

queuestack에 넣을 원소들이 주어졌을 때, 해당 원소를 넣은 리턴값을 출력하는 프로그램을 작성해보자.
*/

// https://velog.io/@kwb020312/Baekjoon-24511-queuestack 풀이
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(value) {
    this.value = value;
  }
  prev = null;
  next = null;
}

class Deque {
  left = null;
  right = null;
  size = 0;

  leftInsert(val) {
    const node = new Node(val);
    this.size += 1;
    if (!this.left && !this.right) {
      this.left = node;
      this.right = node;
    } else {
      node.next = this.left;
      this.left.prev = node;
      this.left = node;
    }
  }

  rightInsert(val) {
    const node = new Node(val);
    this.size += 1;
    if (!this.left && !this.right) {
      this.left = node;
      this.right = node;
    } else {
      node.prev = this.right;
      this.right.next = node;
      this.right = node;
    }
  }

  leftExtract() {
    if (!this.left) return;
    const poppedVal = this.left.value;
    this.size -= 1;
    if (this.left.next) {
      this.left = this.left.next;
      this.left.prev = null;
    } else {
      this.left = null;
      this.right = null;
    }
    return poppedVal;
  }
}

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const deque = new Deque();
  const C = input.pop().split(" "); // ["2", "4", "7"]
  const CLen = input.pop();
  const B = input.pop().split(" "); // ["1", "2", "3", "4"]
  const A = input.pop().split(" "); // ["0", "1", "1", "0"]
  const ABLen = Number(input.pop());
  const result = [];

  // 타입이 '큐' 인 요소 중 뒤에 있는 요소가 가장 먼저 출력 됨(큐의 요소들이 밀리면서 가장 우측에서 출력)
  for (let i = 0; i < ABLen; i++) {
    if (A[i] === "0") deque.leftInsert(B[i]);
  }
  // 입력이 그 다음 입력된 순으로 출력됨(타입이 '큐' 인 요소의 자리에 순서대로 재입력되기 때문)
  for (let i = 0; i < CLen; i++) {
    deque.rightInsert(C[i]);
    result.push(deque.leftExtract());
  }

  console.log(result.join(" "));

  process.exit();
});
