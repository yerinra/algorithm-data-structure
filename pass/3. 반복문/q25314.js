// 코딩은 체육과목입니다

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
let text = "";

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  for (let i = 1; i <= input / 4; i++) {
    text += "long ";
  }
  text += "int";
  console.log(text);
  process.exit();
});
