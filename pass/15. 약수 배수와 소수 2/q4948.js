// 베르트랑 공준
// 베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.

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
  let arr = input.map((v) => [+v, 2 * v]);

  function prime(n, m) {
    let arr = new Array(m + 1).fill(true);
    arr[0] = false;
    arr[1] = false;

    for (let i = 2; i * i <= m; i++) {
      for (let j = i * i; j <= m; j += i) {
        arr[j] = false;
      }
    }
    let count = 0;
    for (let i = n + 1; i <= m; i++) {
      if (arr[i] == true) count++;
    }
    return count;
  }
  arr.map((v) => prime(...v));
  console.log(arr.map((v) => prime(...v)).join("\n"));
  process.exit();
});
