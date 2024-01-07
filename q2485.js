// 가로수
// https://www.acmicpc.net/problem/2485

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [, ...trees] = input;

  let arr = [];
  for (let i = 1; i < trees.length; i++) {
    arr.push(trees[i] - trees[i - 1]);
  }

  function gcd(n, m) {
    while (n % m !== 0) {
      [n, m] = [m, n % m];
    }
    return m;
  }

  function gcdArr(arr) {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
      temp = gcd(temp, arr[i]);
    }
    return temp;
  }

  let space = gcdArr(arr);

  console.log((trees[trees.length - 1] - trees[0]) / space + 1 - trees.length);
  process.exit();
});
