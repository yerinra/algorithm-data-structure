// 수학은 비대면강의입니다
/*
정수 
$a$, 
$b$, 
$c$, 
$d$, 
$e$, 
$f$가 공백으로 구분되어 차례대로 주어진다. (
$-999 \leq a,b,c,d,e,f \leq 999$)

문제에서 언급한 방정식을 만족하는 
$\left(x,y\right)$가 유일하게 존재하고, 이 때 
$x$와 
$y$가 각각 
$-999$ 이상 
$999$ 이하의 정수인 경우만 입력으로 주어짐이 보장된다.
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
  // 1 2 2 0 2 2 -> 정답 0 1 케이스 미통과
  // 브루트포스로 풀지 않음..!
  // let first = [input[0], input[1], input[2]];
  // let second = [input[3], input[4], input[5]];

  // let new1 = first.map((v) => v * input[3]);
  // let new2 = second.map((v) => v * input[0]);

  // let y = (new1[2] - new2[2]) / (new1[1] - new2[1]);
  // let x = (new2[2] + new2[1] * y * -1) / new2[0];
  // console.log(`${x} ${y}`);
  // process.exit();
  let first = [input[0], input[1], input[2]];
  let second = [input[3], input[4], input[5]];
  for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
      if (
        first[0] * i + first[1] * j == first[2] &&
        second[0] * i + second[1] * j == second[2]
      ) {
        console.log(`${i} ${j}`);
      }
    }
  }
  process.exit();
});
