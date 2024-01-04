// 듣보잡
/*
첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다. 이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다. 이름은 띄어쓰기 없이 알파벳 소문자로만 이루어지며, 그 길이는 20 이하이다. N, M은 500,000 이하의 자연수이다.

듣도 못한 사람의 명단에는 중복되는 이름이 없으며, 보도 못한 사람의 명단도 마찬가지이다.
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
  let n = +input[0].split(" ")[0];
  let m = +input[0].split(" ")[1];
  let db = input.slice(1);

  let map = new Map();
  db.forEach((v) => {
    if (!map.has(v)) map.set(v, 1);
    else map.set(v, map.get(v) + 1);
  });

  let arr = [...map];
  let count = arr.filter((v) => v[1] == 2).length;
  let names = arr
    .filter((v) => v[1] == 2)
    .map((v) => v[0])
    .sort();
  console.log(count);
  console.log(names.join("\n"));

  process.exit();
});
