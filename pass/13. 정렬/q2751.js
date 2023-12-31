// 수 정렬 2

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  input.shift();
  console.log(input.sort((x, y) => x - y).join("\n"));
  process.exit();
});
