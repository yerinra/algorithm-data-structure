// 체스판 다시 칠하기
// 다 푼 소감 : 이제까지 푼 것 중 제일 복잡한 듯 ?! 제일 어려웠다기 보단.. 아 제일 어려웠나? 이제까지 워낙 쉬운 문제만 풀었어가지고.
// 어쩐지 실버 4 문제였음. 이제까지 푼 것 중에선 제일 고난이도 맞다 ^^ 풀어냈다 풀어냈어 좋아요
/*
체스판은 검은색과 흰색이 번갈아서 칠해져 있어야 한다. 구체적으로, 각 칸이 검은색과 흰색 중 하나로 색칠되어 있고, 변을 공유하는 두 개의 사각형은 다른 색으로 칠해져 있어야 한다. 따라서 이 정의를 따르면 체스판을 색칠하는 경우는 두 가지뿐이다. 하나는 맨 왼쪽 위 칸이 흰색인 경우, 하나는 검은색인 경우이다.

보드가 체스판처럼 칠해져 있다는 보장이 없어서, 지민이는 8×8 크기의 체스판으로 잘라낸 후에 몇 개의 정사각형을 다시 칠해야겠다고 생각했다. 당연히 8*8 크기는 아무데서나 골라도 된다. 지민이가 다시 칠해야 하는 정사각형의 최소 개수를 구하는 프로그램을 작성하시오.
*/

/*
8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
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
  const a = +input[0].split(" ")[0];
  const b = +input[0].split(" ")[1];
  input.shift();
  let bstart = [];
  let innerB = "B";
  let wstart = [];
  let innerW = "W";

  for (let i = 1; i < 8; i++) {
    if (innerB[innerB.length - 1] == "B") {
      innerB += "W";
      innerW += "B";
    } else {
      innerB += "B";
      innerW += "W";
    }
  }
  for (let j = 0; j < 8; j++) {
    if (j % 2 == 0) {
      bstart.push(innerB);
      wstart.push(innerW);
    } else {
      bstart.push(innerW);
      wstart.push(innerB);
    }
  }
  let target = [];
  let inner = [];
  let j = 0;
  while (j <= b - 8) {
    inner = [];
    for (let i = 0; i < 8; i++) {
      inner.push(input[i].slice(j, 8 + j));
    }
    target.push(inner);
    j++;
  }
  let k = 0;
  while (input.length > 8) {
    k = 0;
    input.shift();
    while (k <= b - 8) {
      inner = [];
      for (let i = 0; i < 8; i++) {
        inner.push(input[i].slice(k, 8 + k));
      }
      target.push(inner);
      k++;
    }
  }

  let answer;
  let final = [];
  target = target.map((v) => v.join(""));

  for (let i = 0; i < target.length; i++) {
    answer = 0;
    for (let j = 0; j < target[i].length; j++) {
      if (target[i][j] !== bstart.join("")[j]) {
        answer++;
      }
    }
    final.push(answer);
  }

  for (let i = 0; i < target.length; i++) {
    answer = 0;
    for (let j = 0; j < target[i].length; j++) {
      if (target[i][j] !== wstart.join("")[j]) {
        answer++;
      }
    }
    final.push(answer);
  }
  // console.log("bstart");
  // console.log(bstart);
  // console.log("target");
  // console.log(target);
  // console.log(final);
  console.log(Math.min(...final));
  process.exit();
});
