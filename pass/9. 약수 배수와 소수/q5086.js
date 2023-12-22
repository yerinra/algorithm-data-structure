// 배수와 약수
/* 각 테스트 케이스마다 
첫 번째 숫자가 두 번째 숫자의 약수라면 factor를, 
배수라면 multiple을, 
둘 다 아니라면 neither를 출력한다.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let answer = [];
  let arr = input.map((v) => v.split(" ").map((val) => +val));
  arr.pop();
  arr.forEach((v) => {
    if (v[0] % v[1] == 0) {
      answer.push("multiple");
    } else if (v[1] % v[0] == 0) {
      answer.push("factor");
    } else answer.push("neither");
  });
  console.log(answer.join("\n"));
  process.exit();
});
