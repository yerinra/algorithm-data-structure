// 그룹 단어 체커
/*
그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.
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
  const arr = input.filter((_, i) => i !== 0);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = [arr[i][0]];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[i][j - 1]) {
        newArr[i].push(arr[i][j]);
      }
    }
  }
  let answer = newArr.filter((v) => v.length == [...new Set(v)].length).length;
  console.log(answer);
  process.exit();
});
