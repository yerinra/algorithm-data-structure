`dataStructure`

- 선형/비선형 자료구조 이론 정리
- 제로베이스 강의 내용 정리입니다.

# Node.js로 백준 알고리즘 문제풀기

#### 예시는 [1000번](https://www.acmicpc.net/problem/1000) 문제

### 👾 readline (권장)

<pre>
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => +el);
}).on("close", () => {
  const a = +input[0];
  const b = +input[1];
  console.log(a + b);
  process.exit();
});
</pre>

### 👾 fs

<pre>
// 1000.js
const fs = require("fs");
let input = fs.readFileSync("dev/stdin.txt").toString().split(" ");

const a = +input[0];
const b = +input[1];

console.log(a + b);
</pre>

<pre>
// dev/stdin.txt
1 2
</pre>
