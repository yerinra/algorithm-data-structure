// 커트라인
/*
2022 연세대학교 미래캠퍼스 슬기로운 코딩생활에 
$N$명의 학생들이 응시했다.

이들 중 점수가 가장 높은 
$k$명은 상을 받을 것이다. 이 때, 상을 받는 커트라인이 몇 점인지 구하라.

커트라인이란 상을 받는 사람들 중 점수가 가장 가장 낮은 사람의 점수를 말한다.
상을 받는 커트라인을 출력하라.
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
  const target = +input[0].split(" ")[1];
  let scores = input[1].split(" ").map((v) => +v);

  scores = scores.sort((x, y) => y - x);
  console.log(scores[target - 1]);

  process.exit();
});
