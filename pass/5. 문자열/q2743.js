// 단어 길이 재기
// 알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line + "";
}).on("close", () => {
  console.log(input.length);
  process.exit();
});
