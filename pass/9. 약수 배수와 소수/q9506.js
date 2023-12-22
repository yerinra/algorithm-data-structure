// 약수들의 합
/*
어떤 숫자 n이 자신을 제외한 모든 약수들의 합과 같으면, 그 수를 완전수라고 한다.

예를 들어 6은 6 = 1 + 2 + 3 으로 완전수이다.

n이 완전수인지 아닌지 판단해주는 프로그램을 작성하라.
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
  input.pop();
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    answer[i] = [];
    for (let j = 1; j <= input[i]; j++) {
      if (input[i] % j == 0) {
        answer[i].push(j);
      }
    }
  }

  let str = [];
  for (let i = 0; i < answer.length; i++) {
    let total = answer[i].reduce((a, b) => a + b, 0);
    let target = answer[i][answer[i].length - 1];
    answer[i].pop();
    if (total / 2 == target) str.push(`${target} = ${answer[i].join(" + ")}`);
    else str.push(`${target} is NOT perfect.`);
  }
  console.log(str.join("\n"));
  process.exit();
});
