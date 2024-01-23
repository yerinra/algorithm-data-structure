// 단어 뒤집기
// https://www.acmicpc.net/problem/9093

// 문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다.

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
  arr = arr.map((v) =>
    v
      .split(" ")
      .map((val) => val.split("").reverse().join(""))
      .join(" ")
  );
  console.log(arr.join("\n"));
  process.exit();
});
