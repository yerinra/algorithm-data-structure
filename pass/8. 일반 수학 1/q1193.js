// 분수찾기
// 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
// X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.
/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  let target = 0;
  let minus = 1;
  let total = input;

  while (total > 0) {
    total -= minus;
    minus++;
    target++;
  }

  let arrCount = 0;
  for (let i = 1; i <= target; i++) {
    arrCount += i;
  }
  console.log(target);

  const outer = Array.from({ length: target }, (v, i) => {
    if (i % 2 !== 0) {
      return Array.from({ length: 1 }, (val, idx) => {
        let start = 1;
        let end = i + 1;
        let arr = [];
        for (let j = 0; j < i + 1; j++) {
          arr.push(`${start}/${end}`);
          start++;
          end--;
        }
        return arr;
      });
    } else {
      return Array.from({ length: 1 }, (val, idx) => {
        let start = 1;
        let end = i + 1;
        let arr = [];
        for (let j = 0; j < i + 1; j++) {
          arr.push(`${end}/${start}`);
          start++;
          end--;
        }

        return arr;
      });
    }
  });
  console.log(outer.flat(2)[input - 1]);
  process.exit();
});
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  let target = 0;
  let minus = 1;
  let total = input;

  while (total > 0) {
    total -= minus;
    minus++;
    target++;
  }

  let arrCount = 0;
  for (let i = 1; i <= target; i++) {
    arrCount += i;
  }
  let start, end, answer;
  if (target % 2 == 0) {
    // 짝수
    start = target - (arrCount - input);
    end = arrCount - input + 1;
    answer = `${start}/${end}`;
  } else {
    // 홀수
    start = arrCount - input + 1;
    end = target - (arrCount - input);
    answer = `${start}/${end}`;
  }
  console.log(answer);
  process.exit();
});
