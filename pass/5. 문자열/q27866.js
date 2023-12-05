// 문자와 문자열
/* 단어 
$S$와 정수 
$i$가 주어졌을 때, 
$S$의 
$i$번째 글자를 출력하는 프로그램을 작성하시오.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  console.log(input[0][input[1] - 1]);
  process.exit();
});
