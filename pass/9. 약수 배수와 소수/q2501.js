// 약수
// 어떤 자연수 p와 q가 있을 때, 만일 p를 q로 나누었을 때 나머지가 0이면 q는 p의 약수이다.
// 두 개의 자연수 N과 K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ");
}).on("close", () => {
  const a = +input[0];
  const b = +input[1];
  let array = [];
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      array.push(i);
    }
  }
  if (b > array.length) {
    console.log(0);
  } else console.log(array[b - 1]);
  process.exit();
});
