// 알고리즘 수업 - 알고리즘의 수행 시간 6

/*
MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n - 2
        for j <- i + 1 to n - 1
            for k <- j + 1 to n
                sum <- sum + A[i] × A[j] × A[k]; # 코드1
    return sum;
}
*/

/*
const result = ( BigInt(input) * BigInt(input - 1) * BigInt(input - 2) ) / BigInt(6);
console.log(`${result}\n${3}`);
출처: https://minjo0n.tistory.com/13 [민이랑준:티스토리]
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
  const result =
    (BigInt(input) * BigInt(input - 1) * BigInt(input - 2)) / BigInt(6);
  console.log(String(result));
  console.log(3);

  process.exit();
});
