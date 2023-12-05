// 숫자의 합
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const arr = String(input[1])
    .split("")
    .map((v) => +v);

  const total = arr.reduce((p, c) => p + c, 0);
  console.log(total);
  process.exit();
});
