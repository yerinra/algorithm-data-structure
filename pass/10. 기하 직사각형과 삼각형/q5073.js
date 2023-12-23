// 삼각형과 세 변
/*
삼각형의 세 변의 길이가 주어질 때 변의 길이에 따라 다음과 같이 정의한다.

Equilateral :  세 변의 길이가 모두 같은 경우
Isosceles : 두 변의 길이만 같은 경우
Scalene : 세 변의 길이가 모두 다른 경우

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
  input.pop();
  let arr = input.map((v) => v.split(" ").map((val) => +val));
  arr = arr.map((val) => {
    if (Math.max(...val) * 2 >= val.reduce((p, c) => p + c, 0))
      return "Invalid";
    else if (new Set(val).size === 1) return "Equilateral";
    else if (new Set(val).size === 2) return "Isosceles";
    else if (new Set(val).size === 3) return "Scalene";
  });
  console.log(arr.join("\n"));
  process.exit();
});
