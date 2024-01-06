// 최소 공배수
// 두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다. 이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다. 예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.

// 두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.
// 최대공약수만 구해도 최소공배수를 바로 알 수 있습니다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input.shift();
  input = input.map((v) => v.split(" ").map((val) => +val));
  let info = [];
  let greatestArr = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 1; j <= +input[i][1]; j++) {
      if (input[i][0] % j == 0 && input[i][1] % j == 0) greatestArr.push(j);
    }
    let greatest = greatestArr[greatestArr.length - 1];
    info.push(greatest);
    greatestArr = [];
  }

  console.log(input.map((v, i) => (v[0] * v[1]) / info[i]).join("\n"));
  process.exit();
});
