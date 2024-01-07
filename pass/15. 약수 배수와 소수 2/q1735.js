// 분수 합
// https://www.acmicpc.net/problem/1735
// 첫째 줄에 구하고자 하는 기약분수의 분자와 분모를 뜻하는 두 개의 자연수를 빈 칸을 사이에 두고 순서대로 출력한다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input = input.map((v) => v.split(" ").map((v) => +v));

  let [[ja1, mo1], [ja2, mo2]] = input;
  let answer = [];
  if (mo1 % mo2 == 0) {
    answer[0] = ja1 + ja2 * (mo1 / mo2);
    answer[1] = mo1;
  } else if (mo2 % mo1 == 0) {
    answer[0] = ja2 + ja1 * (mo2 / mo1);
    answer[1] = mo2;
  } else {
    answer[0] = ja1 * mo2 + ja2 * mo1;
    answer[1] = mo1 * mo2;
  }

  function gcd(n, m) {
    while (n % m !== 0) {
      [n, m] = [m, n % m];
    }
    return m;
  }
  console.log(answer.map((v) => v / gcd(answer[0], answer[1])).join(" "));
  process.exit();
});
