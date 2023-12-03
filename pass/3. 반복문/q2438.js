// 별 찍기
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
let star = "";

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  for (let i = 1; i <= input; i++) {
    star += "*";
    console.log(star);
  }
});
