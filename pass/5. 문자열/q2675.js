// 문자열 반복
// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

/*
2
3 ABC
5 /HTP

AAABBBCCC
/////HHHHHTTTTTPPPPP
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let arr = input.filter((_, i) => i !== 0).map((v) => v.split(" "));
  let text = "";
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < +arr[i][1].length; k++) {
      for (let j = 0; j < +arr[i][0]; j++) {
        text += arr[i][1][k];
      }
    }
    console.log(text);
    text = "";
  }
  process.exit();
});
