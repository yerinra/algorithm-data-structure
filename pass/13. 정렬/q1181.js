// 단어 정렬

/*
알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

길이가 짧은 것부터
길이가 같으면 사전 순으로
단, 중복된 단어는 하나만 남기고 제거해야 한다.
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
  let [count, ...arr] = input;
  arr = [...new Set(arr)];

  let sorted = arr.sort((a, b) => compareFn(a, b));

  function compareFn(x, y) {
    if (x.length < y.length) {
      return -1;
    } else if (x.length > y.length) {
      return 1;
    } else {
      // 같을 경우
      if (x < y) {
        return -1;
      } else if (x > y) {
        return 1;
      } else return 0;
    }
  }

  console.log(sorted.join("\n"));
  process.exit();
});
