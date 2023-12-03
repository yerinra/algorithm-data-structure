// 합
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let total = 0;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  for (let i = 1; i <= input; i++) {
    total += i;
  }
  console.log(total);
});
