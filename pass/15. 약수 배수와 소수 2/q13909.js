// 창문 닫기
// https://www.acmicpc.net/problem/13909

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  // 메모리 초과
  // 첫 번째 줄에는 창문의 개수와 사람의 수 N(1 ≤ N ≤ 2,100,000,000)이 주어진다.
  // 21억 길이의 배열을 만들었으므로 메모리 초과!

  // let arr = Array.from({ length: input + 1 }, () => 1);

  // for (let i = 1; i <= input; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (j % (i + 1) == 0 && arr[j] == 0) {
  //       arr[j] = 1;
  //     } else if (j % (i + 1) == 0) {
  //       arr[j] = 0;
  //     }
  //   }
  // }
  // arr.shift();

  // 규칙을 찾으니 해법은 허무하게 간단했다.
  // 1부터 16까지 넣으면서 규칙찾기.
  console.log(Math.floor(Math.sqrt(input)));
  process.exit();
});
