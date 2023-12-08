// 단어 공부
/*
알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line + "";
}).on("close", () => {
  let count = {};
  let arr = input.split("").map((v) => v.toLowerCase()); // [m,i,s,s,i]
  let alps = [...new Set(arr)]; // [m,i,s]
  alps.forEach((v, i) => {
    count[v] = 0;
  });
  arr.forEach((v, i) => {
    count[v]++;
  });
  let maxCount = Math.max(...Object.values(count));

  if (
    Object.values(count).indexOf(maxCount) !==
    Object.values(count).lastIndexOf(maxCount)
  ) {
    console.log("?");
  } else {
    console.log(alps[Object.values(count).indexOf(maxCount)].toUpperCase());
  }
  process.exit();
});
