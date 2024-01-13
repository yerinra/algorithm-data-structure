// 도키도키 간식드리미
// https://www.acmicpc.net/problem/12789

/**
5 4 1 3 2 */

// 더 발전 시킬 여지가 있을 듯...
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [count, arr] = input;
  arr = arr.split(" ").map(Number);
  let start = 1;
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == start && temp[temp.length - 1] == start) {
      start++;
      while (temp[temp.length - 1] == start) {
        temp.pop();
        start++;
      }
    } else if (arr[i] == start) {
      start++;
      while (temp[temp.length - 1] == start) {
        temp.pop();
        start++;
      }
    } else if (arr[i] !== start) {
      temp.push(arr[i]);
    }
  }
  if (JSON.stringify(temp) == JSON.stringify([...temp].sort((x, y) => y - x)))
    console.log("Nice");
  else console.log("Sad");
  process.exit();
});
