// 구현 방식
// Top- Down : 재귀를 통해 큰 문제를 작은 문제로 나눠 해결하며 해를 찾는 방법
// Bottom-Up : 반복문을 통해 작은 문제부터 차례대로 해를 찾는 방법

// td
function fib_td(n, d = []) {
  if (n < 2) return n;
  if (d[n]) return d[n];

  d[n] = fib_td(n - 1) + fib_td(n - 2);

  return d[n];
}

console.log(fib_td(5));
console.log(fib_td(6));
console.log(fib_td(7));

// bu

function fib_bu(n, d = []) {
  d[0] = 0;
  d[1] = 1;

  for (let i = 2; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }

  return d[n];
}

console.log(fib_bu(5));
console.log(fib_bu(6));
console.log(fib_bu(7));
