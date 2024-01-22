// 베라의 패션
// https://www.acmicpc.net/problem/15439

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  console.log(input * (input - 1));
  process.exit();
});
