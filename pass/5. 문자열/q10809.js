// 알파벳 찾기
// 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line + "";
}).on("close", () => {
  let arr = new Array(26).fill(-1);
  for (let i = 0; i < input.length; i++) {
    arr[input[i].charCodeAt() - 97] = input.indexOf(input[i]); // 0,1,2,3,4,5,
  }
  console.log(arr.join(" "));
  process.exit();
});
