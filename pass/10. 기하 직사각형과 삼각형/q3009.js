// 네 번째 점
// 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const arr = input.map((v) => v.split(" ").map((val) => +val));

  const x = [];
  const y = [];

  arr.forEach((v) => {
    x.push(v[0]);
    y.push(v[1]);
  });

  const answer = [];

  answer[0] = x.filter((v) => x.indexOf(v) == x.lastIndexOf(v))[0];
  answer[1] = y.filter((v) => y.indexOf(v) == y.lastIndexOf(v))[0];

  console.log(answer.join(" "));
  process.exit();
});
