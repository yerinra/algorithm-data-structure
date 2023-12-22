// 소인수분해

// N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  let num = 2;
  if (input !== 0) {
    while (input != 1) {
      if (input % num == 0) {
        console.log(num);
        input /= num;
      } else num++;
    }
  }
  process.exit();
});
