// 다리 놓기
// https://www.acmicpc.net/problem/1010

/* 왜인지 틀림...trim 때문인가
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input.shift();

  function factorial(num) {
    if (num < 2) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

  let answer = [];
  input = input.map((v) => v.split(" ");
  input.forEach((v) => {
    const N = +v[0];
  const M = +v[1];
    answer.push(factorial(M) / (factorial(N) * factorial(M- N)));
  });
  console.log(answer.join("\n"));
  process.exit();
});
*/

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

function factorial(num) {
  if (num < 2) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let answer = [];
input = input.map((v) => v.split(" "));
input.forEach((v) => {
  const N = +v[0];
  const M = +v[1];
  answer.push(Math.round(factorial(M) / (factorial(N) * factorial(M - N))));
});
console.log(answer.join("\n"));
