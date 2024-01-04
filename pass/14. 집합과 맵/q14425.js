// 문자열 집합

/*
총 N개의 문자열로 이루어진 집합 S가 주어진다.

입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성하시오.
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
  let n = +input[0].split(" ")[0];
  let m = +input[0].split(" ")[1];
  input.shift();
  let strings = [];
  let target = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    strings.push(input[i]);
  }
  for (let i = n; i < input.length; i++) {
    target.push(input[i]);
  }
  let set = new Set(strings);

  for (const i of target) {
    if (set.has(i)) count++;
  }
  console.log(count);
  process.exit();
});
