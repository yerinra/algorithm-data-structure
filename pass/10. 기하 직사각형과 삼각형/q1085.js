// 직사각형에서 탈출
/*
한수는 지금 (x, y)에 있다. 
직사각형은 각 변이 좌표축에 평행하고, 
왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다. 
직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => +el);
}).on("close", () => {
  const [x, y, w, h] = input;

  const arr = [Math.abs(w - x), Math.abs(x), Math.abs(h - y), Math.abs(y)];
  console.log(Math.min(...arr));

  process.exit();
});
