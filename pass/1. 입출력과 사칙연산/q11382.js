// 꼬마 정민

/* 
꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!
A+B+C의 값을 출력한다.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((v) => +v);
}).on("close", () => {
  const a = input[0];
  const b = input[1];
  const c = input[2];

  console.log(a + b + c);

  process.exit();
});
