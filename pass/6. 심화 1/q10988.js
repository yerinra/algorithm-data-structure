// palindrome
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line + "";
}).on("close", () => {
  let palindrome = [];
  input.split("").forEach((v, i) => {
    if (input.indexOf(v) + input.lastIndexOf(v) === input.length - 1) {
      palindrome[i] = true;
    } else palindrome[i] = false;
  });

  if (palindrome.every((v) => v === true)) console.log(1);
  else console.log(0);
  process.exit();
});
