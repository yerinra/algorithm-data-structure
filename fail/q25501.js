// 재귀의 귀재
// https://www.acmicpc.net/problem/25501

// 각 테스트케이스마다, isPalindrome 함수의 반환값과 recursion 함수의 호출 횟수를 한 줄에 공백으로 구분하여 출력한다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [num, ...arr] = input;

  let count = 0;
  function recursion(s, l, r) {
    if (l === 0) count = 0;
    count++;

    if (l >= r) return 1;
    else if (s[l] !== s[r]) return 0;
    else return recursion(s, l + 1, r - 1);
  }

  function isPalindrome(word) {
    return recursion(word, 0, word.length - 1);
  }

  const result = arr.map((v) => `${isPalindrome(v)} ${count}`);

  console.log(result.join("\n"));
  process.exit();
});
