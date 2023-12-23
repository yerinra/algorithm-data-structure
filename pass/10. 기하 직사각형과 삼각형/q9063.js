// 대지

// 첫째 줄에 N 개의 점을 둘러싸는 최소 크기의 직사각형의 넓이를 출력하시오.

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
  let arr = input.map((v) => v.split(" ").map((val) => +val));

  let x = [];
  let y = [];

  arr.forEach((v) => {
    x.push(v[0]);
    y.push(v[1]);
  });

  let finalX = Math.max(...x) - Math.min(...x);
  let finalY = Math.max(...y) - Math.min(...y);
  console.log(finalX * finalY);
  process.exit();
});
