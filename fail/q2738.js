// 행렬 덧셈
// N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let number = input
    .shift()
    .split(" ")
    .map((v) => +v); // [3,3]
  input = input.map((v) => v.split(" ").map((v) => +v));
  let arr1 = input.splice(0, number[0]);
  let result = arr1.map((v, i) => v.map((v2, i2) => v2 + input[i][i2]));
  let answer = [];
  result.forEach((v) => {
    answer.push(v.join(" "));
  });
  // console.log(answer.join("\n"));
  console.log(result);

  // 내 풀이 -> 틀림..
  // let n = +input[0][0]; // 큰 배열 개수(행)
  // let m = +input[0][2]; // 작은 배열 원소 개수(열)
  // let original = input.filter((_, i) => i !== 0).map((v) => v.split(" "));
  // let arr1 = original.slice(0, n);
  // let arr2 = original.slice(n, n + n);
  // let outer = [];
  // for (let i = 0; i < n; i++) {
  //   let inner = [];
  //   for (let j = 0; j < m; j++) {
  //     inner.push(+arr1[i][j] + +arr2[i][j]);
  //   }
  //   outer.push(inner.join(" "));
  // }
  // console.log(outer.join("\n"));
  process.exit();
});
