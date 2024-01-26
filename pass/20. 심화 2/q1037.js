// 약수

// https://www.acmicpc.net/problem/1037

// 첫째 줄에 N의 진짜 약수의 개수가 주어진다. 이 개수는 50보다 작거나 같은 자연수이다. 둘째 줄에는 N의 진짜 약수가 주어진다. 1,000,000보다 작거나 같고, 2보다 크거나 같은 자연수이고, 중복되지 않는다.

// n 출력

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [, arr] = input;
  arr = arr.split(" ").map(Number);
  arr = [...arr, 1];
  arr.sort((x, y) => x - y); // [1,2,3,4,6,8,12]

  function gcd(a, b) {
    let target = [];

    for (let i = Math.min(a, b); i >= 1; i--) {
      if (a % i == 0 && b % i == 0) {
        target.push(i);
      }
    }
    return target[0];
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  let start = arr[0];
  let answer = [];
  for (let i = 1; i < arr.length; i++) {
    start = lcm(start, arr[i]);
    answer.push(start);
  }
  let final;
  if (arr.length % 2 !== 0) {
    // 총 - 짝수개
    final = arr[1] * arr[arr.length - 1];
  } else {
    // 총 - 홀수개
    final = arr[Math.floor((arr.length + 1) / 2)];
  }

  if (arr.includes(final)) {
    final = final * final;
  }
  console.log(final);
  process.exit();
});
