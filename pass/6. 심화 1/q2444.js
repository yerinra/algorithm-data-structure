// 별 찍기 - 7
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  height = +line;
}).on("close", () => {
  let str = "";
  for (let i = 1; i <= height; i++) {
    for (let j = height - i; j > 0; j--) {
      str += " ";
    }
    str += "*";
    for (let j = i + 1; j <= i * 2 - 1; j++) {
      str += "**";
    }
    str += "\n";
  }

  for (let i = height - 1; i > 0; i--) {
    for (let j = 1; j <= height - i; j++) {
      str += " ";
    }
    str += "*";
    for (let j = i * 2 - 2; j >= i; j--) {
      str += "**";
    }
    str += "\n";
  }

  console.log(str);
  process.exit();
});
