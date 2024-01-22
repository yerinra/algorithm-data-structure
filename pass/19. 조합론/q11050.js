// 이항계수1
// https://www.acmicpc.net/problem/11050

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => +el);
}).on("close", () => {
  function factorial(num) {
    if (num < 2) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  const [n, k] = input;
  let answer = factorial(n) / (factorial(k) * factorial(n - k));
  console.log(answer);
  process.exit();
});
