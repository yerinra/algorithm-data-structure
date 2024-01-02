// 숫자 카드
/*
숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 
정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 가지고 있는지 아닌지를 구하는 프로그램을 작성하시오.
*/

// 처음에는 그냥 배열로 했는데 => 시간 초과..!
// 해당 문제와 같이 비교 대상이 너무 많은 경우에는 시간 복잡도가 O(1)인 Set을 사용하는 것이 더 유리.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const cards = new Set(input[1].split(" "));
  const target = input[3].split(" ");

  let result = [];
  for (const i of target) {
    if (cards.has(i)) result.push(1);
    else result.push(0);
  }
  console.log(result.join(" "));
  process.exit();
});
