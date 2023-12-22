// 직사각형
// 넓이 구하기

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
  console.log(a * b);
  process.exit();
});
