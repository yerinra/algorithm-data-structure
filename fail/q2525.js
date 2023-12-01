// 오븐 시계

// 첫째 줄에는 현재 시각이 나온다.
// 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다.
// 두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const hh = +input[0].split(" ")[0];
  const mm = +input[0].split(" ")[1];
  const reqHour = +input[1] >= 60 ? Math.floor(+input[1] / 60) : 0;
  const reqMin = +input[1] >= 60 ? +input[1] - 60 * reqHour : +input[1];
  let answer = [hh + reqHour, mm + reqMin];

  if (answer[1] >= 60) {
    answer[1] -= Math.floor(answer[1] / 60) * 60;
    answer[0]++;
  }
  if (answer[0] >= 24) {
    answer[0] -= 24;
  }

  console.log(answer.join(" "));
  process.exit();
});
