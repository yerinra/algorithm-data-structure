// 팩토리얼
// https://www.acmicpc.net/problem/10872
// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  function factorial(num) {
    if (num < 2) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

  console.log(factorial(input));
  process.exit();
});
