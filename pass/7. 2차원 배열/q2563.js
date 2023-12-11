// 색종이
// 가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지가 있다. 이 도화지 위에 가로, 세로의 크기가 각각 10인 정사각형 모양의 검은색 색종이를 색종이의 변과 도화지의 변이 평행하도록 붙인다. 이러한 방식으로 색종이를 한 장 또는 여러 장 붙인 후 색종이가 붙은 검은 영역의 넓이를 구하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

// 01. 아마 틀릴 듯?
// rl.on("line", (line) => {
//   input.push(line);
// }).on("close", () => {
//   const arr = input
//     .filter((_, i) => i !== 0)
//     .map((v) => v.split(" ").map((v) => +v));
//   let x;
//   let y;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (
//         Math.abs(arr[i][0] - arr[j][0]) < 10 &&
//         Math.abs(arr[i][1] - arr[j][1]) < 10
//       ) {
//         x =
//           Math.min(arr[i][0], arr[j][0]) + 10 - Math.max(arr[i][0], arr[j][0]);
//         y =
//           Math.min(arr[i][1], arr[j][1]) + 10 - Math.max(arr[i][1], arr[j][1]);
//         // console.log(arr[i][0], arr[j][0]);
//       }
//     }
//   }
//   console.log(100 * input[0] - x * y);
//   process.exit();
// });

// 02. 도전ㅋ
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const arr = input
    .filter((_, i) => i !== 0)
    .map((v) => v.split(" ").map((v) => +v));

  let inner = Array.from({ length: 100 }, (v, i) => {
    return 0;
  });

  let outer = Array.from({ length: 100 }, (v, i) => {
    return [...inner];
  });

  for (let k = 0; k < arr.length; k++) {
    let [x, y] = arr[k];

    for (let i = x; i <= x + 9; i++) {
      for (let j = y; j <= y + 9; j++) {
        outer[i][j] = 3;
      }
    }
  }
  console.log(outer.flat().filter((v) => v !== 0).length);

  process.exit();
});
