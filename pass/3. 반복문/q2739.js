// 구구단
// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
// 출력형식과 같게 N*1부터 N*9까지 출력한다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  for (let i = 1; i < 10; i++) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
});
