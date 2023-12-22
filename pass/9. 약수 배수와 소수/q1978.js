// 소수 찾기
// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let arr = input[1].split(" ").map((v) => +v);
  const answer = arr.filter((v) => {
    let a = [];
    for (let i = 1; i <= v; i++) {
      if (v % i == 0) {
        a.push(i);
      }
    }
    if (a.length == 2) return true;
  });
  console.log(answer.length);
  process.exit();
});
