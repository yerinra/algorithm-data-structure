// 소수
// M이상 N이하의 자연수 중 소수인 것을 모두 찾아 첫째 줄에 그 합을, 둘째 줄에 그 중 최솟값을 출력한다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const m = +input[0];
  const n = +input[1];

  let numbers = [];

  for (i = m; i <= n; i++) {
    let count = 0;
    for (j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 2) numbers.push(i);
  }
  let answer = [];
  if (numbers.length !== 0) {
    answer[0] = numbers.reduce((p, c) => p + c, 0);
    answer[1] = Math.min(...numbers);
  } else answer[0] = -1;

  console.log(answer.join("\n"));
  process.exit();
});
