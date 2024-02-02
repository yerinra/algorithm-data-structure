// 통계학
// https://www.acmicpc.net/problem/2108
/*
산술평균 : N개의 수들의 합을 N으로 나눈 값
중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
최빈값 : N개의 수들 중 가장 많이 나타나는 값
범위 : N개의 수들 중 최댓값과 최솟값의 차이
N개의 수가 주어졌을 때, 네 가지 기본 통계값을 구하는 프로그램을 작성하시오.
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
  let [num, ...arr] = input;
  arr.sort((x, y) => x - y);

  const sansul = Math.round(arr.reduce((p, c) => +p + +c, 0) / num);
  const median = arr[(num - 1) / 2];
  const range = arr[num - 1] - arr[0];
  let frequent;
  let obj = {};
  arr.forEach((v) => {
    if (obj[v]) {
      obj[v]++;
    } else {
      obj[v] = 1;
    }
  });

  let max = Math.max(...Object.values(obj));
  let maxKeys = Object.entries(obj)
    .filter((v) => v[1] == max)
    .map((val) => val[0]);

  if (maxKeys.length == 1) frequent = maxKeys[0];
  else {
    let target = maxKeys.sort((x, y) => x - y);
    frequent = target[1];
  }
  console.log([sansul, median, frequent, range].join("\n"));
  process.exit();
});
