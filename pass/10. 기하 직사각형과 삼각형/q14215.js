// 세 막대
/*
영선이는 세 막대를 이용해서 아래 조건을 만족하는 삼각형을 만들려고 한다.

각 막대의 길이는 양의 정수이다
세 막대를 이용해서 넓이가 양수인 삼각형을 만들 수 있어야 한다.
삼각형의 둘레를 최대로 해야 한다.

*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => +el);
}).on("close", () => {
  let max = Math.max(...input);
  let total = input.reduce((p, c) => p + c, 0);
  let rest = total - max;

  if (max >= rest) {
    console.log(rest * 2 - 1);
  } else {
    console.log(total);
  }
  process.exit();
});
