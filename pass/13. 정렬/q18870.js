// 좌표 압축
/*
수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.

X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.
*/

/* 시간 초과 풀이 
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [count, arr] = input;
  arr = arr.split(" ").map((v) => +v);
  let answer = [];
  let original = [...arr];
  arr = [...new Set(arr.sort((x, y) => +x - +y))];
  original.forEach((v) => {
    answer.push(arr.indexOf(v));
  });
  console.log(answer.join(" "));
  process.exit();
});
*/

// 힌트 : 만약 정확한 값이 필요 없고 값의 대소 관계만 필요하다면, 모든 수를 0 이상 N 미만의 수로 바꿀 수 있습니다.
// indexOf로 사용하면 O(n)이 n 제곱이 되므로 객체이용.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [count, arr] = input;
  arr = arr.split(" ").map((v) => +v);

  let original = [...arr];
  arr = [...new Set(arr.sort((x, y) => x - y))];

  let answer = [];
  let obj = {};
  arr.forEach((v, i) => {
    obj[v] = i;
  });

  answer = original.map((v) => obj[v]);
  console.log(answer.join(" "));
  process.exit();
});
