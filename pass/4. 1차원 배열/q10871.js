// x 보다 작은 수
// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const x = +input[0].split(" ")[1];
  const arr = input[1].split(" ");
  console.log(arr.filter((v) => +v < +x).join(" "));
  process.exit();
});
