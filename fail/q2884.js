// 알람 시계
/*
원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.

현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.*/

/*
첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 알람 시간 H시 M분을 의미한다.

입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((v) => +v);
}).on("close", () => {
  const x = input[0];
  const y = input[1];
  let answer = [];

  let totalMinutes;
  if (x === 0) {
    totalMinutes = (x + 24) * 60 + y - 45;
  } else {
    totalMinutes = x * 60 + y - 45;
  }

  answer[0] = x === 0 ? 23 : Math.floor(totalMinutes / 60);
  if (x === 0 && y < 45) {
    answer[0] = 23;
    answer[1] = totalMinutes - answer[0] * 60;
  } else if (x === 0 && y >= 45) {
    answer[0] = 0;
    answer[1] = y - 45;
  } else {
    answer[0] = Math.floor(totalMinutes / 60);
    answer[1] = totalMinutes - answer[0] * 60;
  }

  console.log(answer.join(" "));
  process.exit();
});
