// 숫자 카드 2

// 숫자 카드는 정수 하나가 적혀져 있는 카드이다.
// 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때,
// 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

/* 내 풀이
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let given = input[1].split(" ");
  let sang = input[3].split(" ");

  let set = new Set(given);
  let arr = [...set];
  let obj = {};
  given.forEach((v) => {
    if (obj[v]) {
      obj[v]++;
    } else obj[v] = 1;
  });
  let map = new Map(arr.map((v) => [v, obj[v]]));

  let final = [];
  sang.forEach((v) => {
    if (map.has(v)) final.push(map.get(v));
    else final.push(0);
  });
  console.log(final.join(" "));
  process.exit();
});
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
  let given = input[1].split(" ");
  let sang = input[3].split(" ");

  let map = new Map();

  given.forEach((v) => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
  });

  let final = [];
  sang.forEach((v) => final.push(map.get(v) || 0));
  console.log(final.join(" "));
  process.exit();
});
