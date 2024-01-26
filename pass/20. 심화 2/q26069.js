// 붙임성 좋은 총총이
// https://www.acmicpc.net/problem/26069

// 첫번째 줄에는 사람들이 만난 기록의 수
// $N\ (1 \le N \le 1\ 000)$이 주어진다.

// 두번째 줄부터
// $N$개의 줄에 걸쳐 사람들이 만난 기록이 주어진다.
// $i + 1$번째 줄에는
// $i$번째로 만난 사람들의 이름
// $A_i$와
// $B_i$가 공백을 사이에 두고 주어진다.
// $A_i$와
// $B_i$는 숫자와 영문 대소문자로 이루어진 최대 길이
// $20$의 문자열이며, 서로 같지 않다.

// 총총이의 이름은 ChongChong으로 주어지며, 기록에서 1회 이상 주어진다.

// 동명이인은 없으며, 사람의 이름은 대소문자를 구분한다. (ChongChong과 chongchong은 다른 이름이다.)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [, ...arr] = input;
  arr = arr.map((v) => v.split(" "));
  let obj = { ChongChong: true };
  arr.forEach((v) => {
    if (Object.keys(obj).includes(v[0])) {
      obj[v[1]] = true;
    } else if (Object.keys(obj).includes(v[1])) {
      obj[v[0]] = true;
    }
  });
  console.log(Object.keys(obj).length);
  process.exit();
});
