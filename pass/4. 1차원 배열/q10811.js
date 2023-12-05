// 바구니 뒤집기
/*도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 순서대로 적혀져 있다. 바구니는 일렬로 놓여져 있고, 가장 왼쪽 바구니를 1번째 바구니, 그 다음 바구니를 2번째 바구니, ..., 가장 오른쪽 바구니를 N번째 바구니라고 부른다. 

도현이는 앞으로 M번 바구니의 순서를 역순으로 만들려고 한다. 도현이는 한 번 순서를 역순으로 바꿀 때, 순서를 역순으로 만들 범위를 정하고, 그 범위에 들어있는 바구니의 순서를 역순으로 만든다.

바구니의 순서를 어떻게 바꿀지 주어졌을 때, M번 바구니의 순서를 역순으로 만든 다음, 바구니에 적혀있는 번호를 가장 왼쪽 바구니부터 출력하는 프로그램을 작성하시오. */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const baguni = input[0].split(" ").map((v) => +v)[0]; // [5,4]
  let initArr = Array.from({ length: baguni }, (_, i) => i + 1);
  let temp = [...initArr];
  const turn = input
    .filter((_, i) => i !== 0)
    .map((v) => v.split(" ").map((v) => +v));

  for (let i = 0; i < turn.length; i++) {
    for (let j = turn[i][0]; j <= turn[i][1]; j++) {
      initArr[j - 1] = temp[turn[i][0] - 1 + turn[i][1] - j];
    }
    temp = [...initArr];
  }
  console.log(initArr.join(" "));
});
