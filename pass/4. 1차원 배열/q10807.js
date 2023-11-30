// 개수 세기
// 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const arr = input[1].split(" ").map((v) => +v);
  const target = +input[2];

  const count = arr.filter((v) => v === target).length;
  console.log(count);
  process.exit();
});
