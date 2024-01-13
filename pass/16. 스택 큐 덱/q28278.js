// 스택
// https://www.acmicpc.net/problem/28278

/*
명령은 총 다섯 가지이다.

1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
3: 스택에 들어있는 정수의 개수를 출력한다.
4: 스택이 비어있으면 1, 아니면 0을 출력한다.
5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.

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
  let [, ...instructions] = input;
  let st = [];
  let final = [];
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].split(" ")[0] == "1") {
      st.push(+instructions[i].split(" ")[1]);
    }
    if (instructions[i] == "2") {
      if (st.length > 0) {
        final.push(st.pop());
      } else final.push(-1);
    }

    if (instructions[i] == "3") {
      final.push(st.length);
    }

    if (instructions[i] == "4") {
      if (st.length == 0) final.push(1);
      else final.push(0);
    }

    if (instructions[i] == "5") {
      if (st.length > 0) {
        final.push(st[st.length - 1]);
      } else final.push(-1);
    }
  }
  console.log(final.join("\n"));
  process.exit();
});
