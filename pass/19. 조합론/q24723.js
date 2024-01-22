// 녹색 거탑
// https://www.acmicpc.net/problem/24723
// 녹색거탑의 정상에서 바닥으로 내려오는 경우의 수를 출력한다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  console.log(2 ** input);
  process.exit();
});
