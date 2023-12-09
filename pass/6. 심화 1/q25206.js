// 너의 평점은
/*인하대학교 컴퓨터공학과를 졸업하기 위해서는, 전공평점이 3.3 이상이거나 졸업고사를 통과해야 한다. 그런데 아뿔싸, 치훈이는 깜빡하고 졸업고사를 응시하지 않았다는 사실을 깨달았다!

치훈이의 전공평점을 계산해주는 프로그램을 작성해보자.

전공평점은 전공과목별 (학점 × 과목평점)의 합을 학점의 총합으로 나눈 값이다.

인하대학교 컴퓨터공학과의 등급에 따른 과목평점은 다음 표와 같다. 
A+ 4.5
A0 4.0
A- 3.5...F 0.0
P는 계산에서 제외.
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
  let grades = input.map((v) => {
    return v.split(" ").filter((_, idx) => idx !== 0);
  });
  let final_grades = grades.filter((v) => v[1] !== "P");
  final_grades.forEach((v, i) => {
    let score = 0;
    let g = ["F", "D", "C", "B", "A"];
    let extra = ["-", "0", "+"];
    score += g.findIndex((element) => element == v[1].split("")[0]);
    if (v[1].split("")[0] !== "F") {
      score +=
        (extra.findIndex((element) => element == v[1].split("")[1]) - 1) / 2;
    }
    final_grades[i].push(score);
  });
  let totalScore = final_grades.reduce(
    (p, c) => p + Number(c[0]) * Number(c[2]),
    0
  );
  let d = final_grades.reduce((p, c) => p + Number(c[0]), 0);
  // console.log(final_grades);

  console.log(totalScore / d);
  process.exit();
});
