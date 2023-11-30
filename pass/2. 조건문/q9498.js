// 시험 성적
// 시험 점수를 입력받아 90 ~ 100점은 A,
// 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를
// 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let answer = "";

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  if (input >= 90) {
    answer = "A";
  } else if (input >= 80) {
    answer = "B";
  } else if (input >= 70) {
    answer = "C";
  } else if (input >= 60) {
    answer = "D";
  } else {
    answer = "F";
  }

  console.log(answer);
  process.exit();
});
