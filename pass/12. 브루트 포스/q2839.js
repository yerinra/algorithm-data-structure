// 설탕 배달

// 어려웠던 재귀를 스스로 구현함에 뿌듯..!
/*
상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.

상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.

상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.
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
  let candidates = [];
  let inner = [0, 0];

  let check = function (n) {
    if (input % 5 == 0) {
      candidates.push([input / 5 + inner[0], 0 + inner[1]]);
    } else if (input % 3 == 0) {
      candidates.push([0 + inner[0], input / 3 + inner[1]]);
    }

    while (input > 0) {
      input -= 8;

      inner[0]++;
      inner[1]++;
      check(input);
    }
  };

  check(input);
  candidates = candidates.map((v) => v[0] + v[1]);
  if (candidates.length == 0) console.log(-1);
  else console.log(Math.min(...candidates));
  process.exit();
});
