// 좌표 정렬하기 2

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [count, ...arr] = input;
  arr = arr.map((v) => v.split(" "));

  let sorted = arr.sort((a, b) => compareFn(a, b));

  function compareFn(x, y) {
    if (+x[1] < +y[1]) {
      return -1;
    } else if (+x[1] > +y[1]) {
      return 1;
    } else {
      // 같을 경우
      if (+x[0] < +y[0]) {
        return -1;
      } else if (+x[0] > +y[0]) {
        return 1;
      } else return 0;
    }
  }
  sorted = sorted.map((v) => v.join(" "));
  console.log(sorted.join("\n"));
  process.exit();
});
