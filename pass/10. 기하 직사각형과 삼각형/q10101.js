// 삼각형 외우기
/*
삼각형의 세 각을 입력받은 다음, 

세 각의 크기가 모두 60이면, Equilateral
세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
세 각의 합이 180이 아닌 경우에는 Error
를 출력하는 프로그램을 작성하시오.

*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(+line);
}).on("close", () => {
  if (input.every((v) => v === 60)) {
    console.log("Equilateral");
  } else {
    let total = input.reduce((p, c) => p + c, 0);
    if (total === 180 && new Set(input).size == 2) console.log("Isosceles");
    else if (
      total === 180 &&
      input.every((val) => input.indexOf(val) == input.lastIndexOf(val))
    )
      console.log("Scalene");
    else if (total !== 180) console.log("Error");
  }
  process.exit();
});
