// 고양이
// 고양이를 출력한다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  console.log(`\\    /\\
 )  ( ')
(  /  )
 \\(__)|`);
  process.exit();
});
