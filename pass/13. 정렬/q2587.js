// 평균과 중앙값

/*
첫째 줄에는 평균을 출력하고, 둘째 줄에는 중앙값을 출력한다. 평균과 중앙값은 모두 자연수이다.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(+line);
}).on("close", () => {
  input = input.sort((x, y) => x - y);
  const total = input.reduce((p, c) => p + c, 0);
  const average = total / input.length;
  console.log([average, input[2]].join("\n"));
  process.exit();
});
