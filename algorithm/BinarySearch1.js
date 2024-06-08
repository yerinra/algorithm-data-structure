// 반복문 기반의 이진 검색
function binarySearch_loop(arr, n) {
  let lowIdx = 0;
  let midIdx = 0;
  let highIdx = arr.length - 1;

  while (lowIdx <= highIdx) {
    midIdx = Math.floor((lowIdx + highIdx) / 2);

    if (arr[midIdx] > n) {
      highIdx = midIdx - 1;
    } else if (arr[midIdx] < n) {
      lowIdx = midIdx + 1;
    } else return midIdx;
  }

  return -1;
}

// TC
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch_loop(array, 0));
console.log(binarySearch_loop(array, 3));
console.log(binarySearch_loop(array, 7));
console.log(binarySearch_loop(array, 10));
