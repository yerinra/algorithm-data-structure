// 다이얼
/* 전화를 걸고 싶은 번호가 있다면, 숫자를 하나를 누른 다음에 금속 핀이 있는 곳 까지 시계방향으로 돌려야 한다. 숫자를 하나 누르면 다이얼이 처음 위치로 돌아가고, 다음 숫자를 누르려면 다이얼을 처음 위치에서 다시 돌려야 한다.

숫자 1을 걸려면 총 2초가 필요하다. 1보다 큰 수를 거는데 걸리는 시간은 이보다 더 걸리며, 한 칸 옆에 있는 숫자를 걸기 위해선 1초씩 더 걸린다.

상근이의 할머니는 전화 번호를 각 숫자에 해당하는 문자로 외운다. 즉, 어떤 단어를 걸 때, 각 알파벳에 해당하는 숫자를 걸면 된다. 예를 들어, UNUCIC는 868242와 같다.

할머니가 외운 단어가 주어졌을 때, 이 전화를 걸기 위해서 필요한 최소 시간을 구하는 프로그램을 작성하시오. */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line + "";
}).on("close", () => {
  let arr = input.split("");
  // let num = 0;
  // arr.forEach((alphabet) => {
  //   if (alphabet === "A" || alphabet == "B" || alphabet == "C") {
  //     num += 3;
  //   } else if (alphabet === "D" || alphabet == "E" || alphabet == "F") {
  //     num += 4;
  //   } else if (alphabet === "G" || alphabet == "H" || alphabet == "I") {
  //     num += 5;
  //   } else if (alphabet === "J" || alphabet == "K" || alphabet == "L") {
  //     num += 6;
  //   } else if (alphabet === "M" || alphabet == "N" || alphabet == "O") {
  //     num += 7;
  //   } else if (
  //     alphabet === "P" ||
  //     alphabet == "Q" ||
  //     alphabet == "R" ||
  //     alphabet == "S"
  //   ) {
  //     num += 8;
  //   } else if (alphabet == "T" || alphabet == "U" || alphabet == "V") {
  //     num += 9;
  //   } else if (
  //     alphabet === "W" ||
  //     alphabet == "X" ||
  //     alphabet == "Y" ||
  //     alphabet == "Z"
  //   ) {
  //     num += 10;
  //   }
  // });

  // console.log(num);
  let result = 0;
  // for (let i in arr)
  for (let i = 0; i < arr.length; i++)
    result +=
      ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"].findIndex(
        (v) => v.includes(arr[i])
      ) + 3;
  console.log(result);
  process.exit();
});

// 틀린 건 아니지만 더 좋은 풀이를 발견해서 fail 에 넣음.
