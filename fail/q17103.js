// 골드바흐 파티션
// https://www.acmicpc.net/problem/17103

// 골드바흐의 추측: 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
// 짝수 N을 두 소수의 합으로 나타내는 표현을 골드바흐 파티션이라고 한다.
// 짝수 N이 주어졌을 때, 골드바흐 파티션의 개수를 구해보자.
// 두 소수의 순서만 다른 것은 같은 파티션이다.

// 시간 초과
/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [, ...arr] = input; // arr = [6,8,10,12,100]
  arr = arr.map((v) => +v);
  let max = Math.max(...arr);

  const primeAll = (n) => {
    let nums = Array.from({ length: n + 1 }).fill(true);

    nums[0] = false;
    nums[1] = false;
    let answer = [];
    for (let i = 2; i * i <= n; i++) {
      for (let j = i * i; j <= n; j += i) {
        nums[j] = false;
      }
    }

    nums.forEach((v, i) => {
      if (v == true) answer.push(i);
    });

    return answer;
  };
  let primeArr = primeAll(max);
  primeArr.shift();

  const final = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < primeArr.length; j++) {
      if (
        primeArr.includes(arr[i] - primeArr[j]) &&
        primeArr[j] <= arr[i] / 2
      ) {
        count++;
      }
    }

    final.push(count);

    count = 0;
  }

  console.log(final.join("\n"));
  process.exit();
});
*/

// 가장 큰 수보다 적은 소수를 모두 구하는 배열 하나를 만들어서 (에라토스테네스의 체)
// 그 배열을 돌면서 확인
// input 수의 소수와 그 조합에 해당하는 수(input 수 - 소수)가 모두 배열에 존재하는지 확인

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
  let arr = input.map(Number);
  let max = Math.max(...arr);

  const primeArr = Array.from({ length: max + 1 }, () => true);
  primeArr[0] = false;
  primeArr[1] = false;

  for (let i = 2; i * i <= max; i++) {
    for (let j = i * i; j <= max; j += i) {
      primeArr[j] = false;
    }
  }

  let answer = [];
  for (let num of arr) {
    let count = 0;
    for (let j = 2; j <= num / 2; j++) {
      if (primeArr[j] && primeArr[num - j]) count++;
    }
    answer.push(count);
  }
  console.log(answer.join("\n"));
  process.exit();
});
