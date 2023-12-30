// 수 정렬하기
// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(+line.trim());
  input.shift();
}).on("close", () => {
  console.log(input.sort((x, y) => x - y).join("\n"));
  process.exit();
});
