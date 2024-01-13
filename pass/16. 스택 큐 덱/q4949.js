// 균형잡힌 세상
// https://www.acmicpc.net/problem/4949
/**
  각 줄마다 해당 문자열이 균형을 이루고 있으면 "yes"를, 아니면 "no"를 출력한다. 
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
  input.pop();
  function onlyPs(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "(" || str[i] == ")" || str[i] == "[" || str[i] == "]") {
        res += str[i];
      }
    }
    let st = [];

    for (let i = 0; i < res.length; i++) {
      if (res[i] == "(") {
        st.push(res[i]);
      } else if (res[i] == ")") {
        if (st[st.length - 1] == "(") st.pop();
        else st.push(res[i]);
      } else if (res[i] == "[") {
        st.push(res[i]);
      } else if (res[i] == "]") {
        if (st[st.length - 1] == "[") st.pop();
        else st.push(res[i]);
      }
    }

    if (st.length == 0) return "yes";
    else return "no";
  }

  let final = input.map((v) => onlyPs(v));
  console.log(final.join("\n"));
  process.exit();
});
