// 알고리즘 수업 - 점근적 표기
/*

알고리즘의 소요 시간을 나타내는 O-표기법(빅-오)을 다음과 같이 정의하자.

O(g(n)) = {f(n) | 모든 n ≥ n0에 대하여 f(n) ≤ c × g(n)인 양의 상수 c와 n0가 존재한다}

이 정의는 실제 O-표기법(https://en.wikipedia.org/wiki/Big_O_notation)과 다를 수 있다.

함수 f(n) = a1n + a0, 양의 정수 c, n0가 주어질 경우 O(n) 정의를 만족하는지 알아보자.

첫째 줄에 함수 f(n)을 나타내는 정수 a1, a0가 주어진다. (0 ≤ |ai| ≤ 100)

다음 줄에 양의 정수 c가 주어진다. (1 ≤ c ≤ 100)

다음 줄에 양의 정수 n0가 주어진다. (1 ≤ n0 ≤ 100)

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
  const fn = input[0].split(" ").map((v) => +v);
  const c = +input[1]; // 8
  const n0 = +input[2]; // 1
  let n;
  if (fn[0] - c > 0) {
    /* 입력값이
    7 -2
    6
    1
    인 경우 */
    // 7n -2 <= 6n
    // 식을 정리하면 n<=2 인 경우에만 성립. 모든 n ≥ n0에 대하여 성립해야 하기 때문에 탈락~!

    console.log(0);
  } else if (fn[0] - c < 0) {
    n = fn[1] / (c - fn[0]);
    if (Math.ceil(n) <= n0) console.log(1);
    else console.log(0);
  } else {
    // fn[0] - c 이 0인 경우
    if (fn[1] <= 0)
      console.log(1); // 정리한 식이 7n -7 <= 7n 이렇다면 무조건 성립
    else console.log(0); // 7n +2 <= 7n 이라 성립하지 않음
  }

  process.exit();
});
