// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

// rl.on("line", (line) => {
//   input = line.split(" ").map((el) => +el);
//   rl.close();
// });

// rl.on("close", () => {
//   const a = +input[0];
//   const b = +input[1];
//   console.log(a + b);
//   process.exit();
// });

rl.on("line", (line) => {
  input = line.split(" ").map((el) => +el);
}).on("close", () => {
  const a = +input[0];
  const b = +input[1];
  console.log(a + b);
  process.exit();
});
