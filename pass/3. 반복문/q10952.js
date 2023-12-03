// A+B-5

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  for (let i = 0; i < input.length - 1; i++) {
    console.log(input[i].split(" ").reduce((p, c) => +p + +c, 0));
  }
});
