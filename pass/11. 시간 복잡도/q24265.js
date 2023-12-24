// 알고리즘 수업 - 알고리즘의 수행 시간 4
/* MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n - 1
        for j <- i + 1 to n
            sum <- sum + A[i] × A[j]; # 코드1
    return sum;
}
}
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  const arr = [(input * (input - 1)) / 2, 2];
  console.log(arr.join("\n"));
  process.exit();
});
