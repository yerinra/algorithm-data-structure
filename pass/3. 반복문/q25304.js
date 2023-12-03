// 영수증
/* 첫째 줄에는 영수증에 적힌 총 금액 
$X$가 주어진다.

둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 
$N$이 주어진다.

이후 
$N$개의 줄에는 각 물건의 가격 
$a$와 개수 
$b$가 공백을 사이에 두고 주어진다.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let total = 0;
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  for (let i = 2; i < input.length; i++) {
    total += +input[i].split(" ")[0] * +input[i].split(" ")[1];
  }
  if (total === +input[0]) console.log("Yes");
  else console.log("No");
  process.exit();
});
