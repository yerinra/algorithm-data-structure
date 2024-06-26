// 재귀함수 기반의 이진 검색
function binarySearch_recursive(
  arr,
  n,
  lowIndex = 0,
  highIndex = arr.length - 1
) {
  if (highIndex < lowIndex) return -1;
  let midIndex = Math.floor((lowIndex + highIndex) / 2);

  if (arr[midIndex] > n) {
    return binarySearch_recursive(arr, n, lowIndex, midIndex - 1);
  } else if (arr[midIndex] < n) {
    return binarySearch_recursive(arr, n, midIndex + 1, highIndex);
  } else return midIndex;
}

// TC
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch_recursive(array, 0));
console.log(binarySearch_recursive(array, 3));
console.log(binarySearch_recursive(array, 7));
console.log(binarySearch_recursive(array, 10));
