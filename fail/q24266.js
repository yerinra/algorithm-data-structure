// 알고리즘 수업 - 알고리즘의 수행 시간 5
/* 
MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n
        for j <- 1 to n
            for k <- 1 to n
                sum <- sum + A[i] × A[j] × A[k]; # 코드1
    return sum;
}
*/
/*
여기까지는 동일한 내용이지만 우리가 하나 간과한 사항이 있다. JavaScript로 표현할 수 있는 Number의 범위가 -2^53+1에서 2^53-1(9,007,199,254,740,991)까지인데 문제 입력의 최대 범위는 이를 초과하는 125,000,000,000,000,000 값을 가지게 된다. 따라서 Number 대신 Number 범위를 넘는 숫자를 사용할 수 있게 해주는 BigInt를 사용해야한다.
여기서도 주의할 점은 BigInt를 그냥 사용할 경우 뒤에 n이 붙어서 나오게 된다. 따라서 이를 문자열로 다시 변경해줘야 우리가 원하는 숫자값을 출력할 수 있다.
출처: https://minjo0n.tistory.com/12 [민이랑준:티스토리]

let num = BigInt(input);

console.log(`${num * num * num}`);
console.log('3');
출처: https://minjo0n.tistory.com/12 [민이랑준:티스토리]
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
  let num = BigInt(input);

  const arr = [num * num * num, 3];
  console.log(arr.join("\n"));

  process.exit();
});
