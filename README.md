# Node.js로 백준 알고리즘 문제풀기

#### 예시는 [1000번](https://www.acmicpc.net/problem/1000) 문제

### 👾 readline

<pre>
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => +el);
  rl.close();
});

rl.on("close", () => {
    // 코드 작성
  const A = +input[0];
  const B = +input[1];
  console.log(A + B);
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
