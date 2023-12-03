// 빠른 A+B
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let total = "";
rl.on("line", (line) => {
  input.push(line.split(" "));
}).on("close", () => {
  for (let i = 1; i < input.length; i++) {
    total += `${+input[i][0] + +input[i][1]}`;
    total += "\n";
  }
  console.log(total);
  process.exit();
});
