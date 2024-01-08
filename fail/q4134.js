// 다음 소수
// https://www.acmicpc.net/problem/4134

// 각각의 테스트 케이스에 대해서 n보다 크거나 같은 소수 중 가장 작은 소수를 한 줄에 하나씩 출력한다.

//
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [, ...arr] = input;

  function primeNumber(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) return false;
    }
    return true;
  }

  const primeArr = [];
  for (let i of arr) {
    while (!primeNumber(i)) {
      i++;
    }
    primeArr.push(i);
  }

  console.log(primeArr.join("\n"));
  process.exit();
});
