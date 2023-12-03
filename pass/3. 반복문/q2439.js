// 별 찍기
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
// dirty 01 - 맞았습니다!!
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = 0;
// let arr = [];
// let star = "";
// let space = "";

// rl.on("line", (line) => {
//   input = +line;
// }).on("close", () => {
//   for (let j = input; j > 0; j--) {
//     space += " ";
//     arr.unshift(space);
//   }

//   for (let j = 1; j <= input; j++) {
//     star += "*";
//     arr[j - 1] += star;
//   }

//   console.log(arr.map((v) => v.slice(1)).join("\n"));
// });

// 02
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
let arr = [];
let star = "";
let space = "";

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  for (let j = input; j > 0; j--) {
    arr.unshift(space);
    space += " ";
  }

  for (let j = 1; j <= input; j++) {
    star += "*";
    arr[j - 1] += star;
  }

  console.log(arr.join("\n"));
});
