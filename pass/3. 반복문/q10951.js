// A+B-4
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i].split(" ").reduce((p, c) => +p + +c, 0));
  }
});
