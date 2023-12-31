// 소트 인사이드
// 배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line + "";
}).on("close", () => {
  let answer = input
    .split("")
    .sort((x, y) => +y - +x)
    .join("");
  console.log(answer);
  process.exit();
});
