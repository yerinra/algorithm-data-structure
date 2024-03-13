function countConsecutiveSums(n) {
  let count = 0;
  let sum = 0;
  let start = 1;

  for (let i = 1; i <= n; i++) {
    sum += i;

    while (sum > n) {
      sum -= start;
      start++;
    }

    if (sum === n) {
      count++;
    }
  }

  return count;
}

// 각 정수를 sum에 더해주고,
// while 루프를 사용하여 sum이 n을 초과하는 경우, 연속된 정수의 합에서 가장 작은 값을 빼줍니다.
// 이를 통해 가능한 모든 연속된 정수의 합을 고려합니다.
