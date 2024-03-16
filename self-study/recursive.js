// 재귀 w/ chat.openai.com

// n 이하의 수의 합.
function sum(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + sum(n - 1);
  }
}

// 팩토리얼.
function fac(n) {
  if (n <= 1) return 1;
  else return n * fac(n - 1);
}

// 피보나치
function fib(n) {
  if (n < 3) return 1;
  else return fib(n - 2) + fib(n - 1);
}

// n을 이진수로 변환.
function bi(n, str = "") {
  if (n <= 1) return n + str;
  else return bi(Math.floor(n / 2), (n % 2) + str);
}

function decimalToBinary(n) {
  if (n === 0) {
    return "0"; // 기본 사례: 숫자가 0이면 이진수도 0이다.
  } else if (n === 1) {
    return "1"; // 기본 사례: 숫자가 1이면 이진수도 1이다.
  } else {
    let binary = decimalToBinary(Math.floor(n / 2)); // 몫을 구하고 재귀 호출한다.
    return binary + (n % 2); // 이진수에 나머지를 추가한다.
  }
}
