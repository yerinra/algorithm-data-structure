// 회사에 있는 사람

// 현재 회사에 있는 사람의 이름을 사전 순의 역순으로 한 줄에 한 명씩 출력한다.
/* 틀린 풀이 
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [, ...data] = input;
  data = data.map((v) => v.split(" ")[0]);
  console.log(data);

  let obj = {};
  for (const i of data) {
    if (obj[i]) {
      obj[i]++;
    } else obj[i] = 1;
  }

  let left = Object.entries(obj).filter((v) => v[1] % 2 !== 0);

  console.log(
    left
      .map((v) => v[0])
      .flat()
      .sort().reverse()
      .join("\n")
  );
  process.exit();
});
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
  let [, ...data] = input;
  let enter = new Set(data.map((v) => v.split(" ")[0]));

  let obj = {};
  for (const i of data.map((v) => v.split(" ")[0])) {
    if (obj[i]) {
      obj[i]++;
    } else obj[i] = 1;
  }

  let left = Object.entries(obj)
    .filter((v) => v[1] % 2 == 0)
    .map((v) => v[0]);

  for (i of left) {
    if (enter.has(i)) enter.delete(i);
  }
  console.log([...enter].sort().reverse().join("\n"));
  process.exit();
});
