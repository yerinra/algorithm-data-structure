// 나는야 포켓몬 마스터 이다솜

// indexOf 로 하면 시간 초과. map으로 해야 함.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [nums, ...given] = input;
  let n = +nums.split(" ").map((v) => +v)[0];
  let m = +nums.split(" ").map((v) => +v)[1];
  let pokemon = input.slice(1, n + 1);
  let target = input.slice(n + 1);

  const map = new Map(pokemon.map((v, i) => [v, i + 1]));
  let answer = [];
  target.forEach((v) => {
    if (Number.isNaN(+v)) {
      answer.push(map.get(v));
    } else {
      answer.push(pokemon[+v - 1]);
    }
  });
  console.log(answer);
  console.log(answer.join("\n"));

  process.exit();
});
