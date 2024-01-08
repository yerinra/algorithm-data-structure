// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => +el);
}).on("close", () => {
  const a = +input[0];
  const b = +input[1];
  let arr = Array(b + 1).fill(true);
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i <= b; i++) {
    for (let j = i * i; j <= b; j += i) {
      arr[j] = false;
    }
  }

  let answer = [];
  for (let i = a; i <= b; i++) {
    if (arr[i] === true) answer.push(i);
  }
  console.log(answer.join("\n"));
  process.exit();
});
