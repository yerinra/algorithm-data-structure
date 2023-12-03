// A+B-8
// A+B 출력
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let total = 0;
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  for (let i = 1; i < input.length; i++) {
    total += +input[i].split(" ")[0] + +input[i].split(" ")[1];
    console.log(
      `Case #${i}: ${+input[i].split(" ")[0]} + ${+input[i].split(
        " "
      )[1]} = ${total}`
    );
    total = 0;
  }

  process.exit();
});
