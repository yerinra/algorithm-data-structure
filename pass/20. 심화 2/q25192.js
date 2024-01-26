// 인사성 밝은 곰곰이
// https://www.acmicpc.net/problem/25192

/*
알고리즘 입문방 오픈 채팅방에서는 새로운 분들이 입장을 할 때마다 곰곰티콘을 사용해 인사를 한다. 이를 본 문자열 킬러 임스는 채팅방의 기록을 수집해 그 중 곰곰티콘이 사용된 횟수를 구해 보기로 했다.

ENTER는 새로운 사람이 채팅방에 입장했음을 나타낸다. 그 외는 채팅을 입력한 유저의 닉네임을 나타낸다. 닉네임은 숫자 또는 영문 대소문자로 구성되어 있다.

새로운 사람이 입장한 이후 처음 채팅을 입력하는 사람은 반드시 곰곰티콘으로 인사를 한다. 그 외의 기록은 곰곰티콘을 쓰지 않은 평범한 채팅 기록이다.

채팅 기록 중 곰곰티콘이 사용된 횟수를 구해보자!
*/

// 시간 초과 풀이
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", (line) => {
//   input.push(line);
// }).on("close", () => {
//   let [, ...arr] = input;
//   let greet = [];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "ENTER") {
//       greet = [];
//     } else {
//       if (!greet.includes(arr[i])) {
//         count++;
//         greet.push(arr[i]);
//       }
//     }
//   }
//   console.log(count);
//   process.exit();
// });

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [, ...arr] = input;
  let outer = [];
  let greet = [];
  let count = 0;
  // arr = arr.split("ENTER");
  arr.forEach((v, i) => {
    if (v == "ENTER") {
      outer.push(greet);
      greet = [];
    } else {
      greet.push(v);
    }
    if (i == arr.length - 1) {
      outer.push(greet);
    }
  });

  outer = outer.filter((v) => v.length !== 0);
  outer = outer.map((v) => [...new Set(v)]).flat();
  console.log(outer.length);

  process.exit();
});
