// 문자열
// 문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const arr = input.filter((_, i) => i !== 0);
  arr.forEach((v) => {
    console.log(`${v[0]}${v[v.length - 1]}`);
  });

  process.exit();
});
