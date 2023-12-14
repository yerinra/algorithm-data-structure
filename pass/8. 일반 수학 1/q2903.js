// 중앙 이동 알고리즘
/*
상근이는 친구들과 함께 SF영화를 찍으려고 한다. 이 영화는 외계 지형이 필요하다. 실제로 우주선을 타고 외계 행성에 가서 촬영을 할 수 없기 때문에, 컴퓨터 그래픽으로 CG처리를 하려고 한다.

외계 지형은 중앙 이동 알고리즘을 이용해서 만들려고 한다.

알고리즘을 시작하면서 상근이는 정사각형을 이루는 점 4개를 고른다. 그 후에는 다음과 같은 과정을 거쳐서 지형을 만든다.

정사각형의 각 변의 중앙에 점을 하나 추가한다.
정사각형의 중심에 점을 하나 추가한다.
초기 상태에서 위와 같은 과정을 한 번 거치면 총 4개의 정사각형이 새로 생긴다. 이와 같은 과정을 상근이가 만족할 때 까지 계속한다.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = +line;
}).on("close", () => {
  let init = 3;
  for (let i = 1; i < input; i++) {
    init = init * 2 - 1;
  }
  console.log(init ** 2);
  process.exit();
});
