// 단어의 개수
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line
    .trim()
    .split(" ")
    .filter((v) => v !== "");
}).on("close", () => {
  console.log(input.length);
  process.exit();
});
