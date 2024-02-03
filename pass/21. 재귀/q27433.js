// 팩토리얼 2
// https://www.acmicpc.net/problem/27433

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  function factorial(num) {
    if (num <= 1) return 1;
    else return factorial(num - 1) * num;
  }
  console.log(factorial(input));
  process.exit();
});
