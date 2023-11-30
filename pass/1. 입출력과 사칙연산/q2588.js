// 곱셈
/*
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 
(3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const a = +input[0];
  const b = +input[1];

  const bSplit = String(b)
    .split("")
    .map((v) => +v);

  for (let i = bSplit.length - 1; i >= 0; i--) {
    console.log(a * bSplit[i]);
  }
  console.log(a * b);

  process.exit();
});
