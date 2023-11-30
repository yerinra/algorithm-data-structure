// 두 수 비교하기
// 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

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
  a > b ? console.log(">") : a < b ? console.log("<") : console.log("==");
  process.exit();
});
