// 세탁소 사장 동혁
/*
거스름돈의 액수가 주어지면 리암이 줘야할 쿼터(Quarter, $0.25)의 개수, 다임(Dime, $0.10)의 개수, 니켈(Nickel, $0.05)의 개수, 페니(Penny, $0.01)의 개수를 구하는 프로그램을 작성하시오. 거스름돈은 항상 $5.00 이하이고, 손님이 받는 동전의 개수를 최소로 하려고 한다. 예를 들어, $1.24를 거슬러 주어야 한다면, 손님은 4쿼터, 2다임, 0니켈, 4페니를 받게 된다.
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
  let arr = input.filter((_, i) => i !== 0);
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let count = [0, 0, 0, 0];
    let target = arr[i];
    count[0] = Math.floor(target / 25);
    target = target % 25;
    count[1] = Math.floor(target / 10);
    target = target % 10;
    count[2] = Math.floor(target / 5);
    target = target % 5;
    count[3] = target;
    answer.push(count.join(" "));
  }
  console.log(answer.join("\n"));
  process.exit();
});
