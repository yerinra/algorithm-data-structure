// 세로읽기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((v) => v.split("")));
}).on("close", () => {
  let str = "";
  input = input.flat();
  let maxLength = input[0].length;
  input.forEach((v) => {
    if (v.length > maxLength) maxLength = v.length;
  });

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[j][i] !== undefined) str += input[j][i];
    }
  }
  console.log(str);
  process.exit();
});
