// A+B-7
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let total = 0;
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  for (let i = 1; i < input.length; i++) {
    total += +input[i].split(" ")[0] + +input[i].split(" ")[1];
    console.log(`Case #${i}: ${total}`);
    total = 0;
  }

  process.exit();
});
