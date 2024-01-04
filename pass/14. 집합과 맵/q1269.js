// 대칭 차집합

// 개수 출력

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let arr = [...input[1].split(" "), ...input[2].split(" ")];
  let map = new Map();
  arr.forEach((v) => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
  });
  let final = [...map];
  console.log(final.filter((v) => v[1] == 1).length);

  process.exit();
});
