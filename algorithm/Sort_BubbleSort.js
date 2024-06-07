// Bubble Sort
// 서로 인접한 두 원소를 비교하면서 정렬
// 평균 시간 복잡도는 O(n ** 2)

let swap = function (arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

let bubbleSort_v1 = function (arr) {
  // 총 반복 횟수
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
};

let bubbleSort_v2 = function (arr) {
  // 총 반복 횟수
  for (let i = 0; i < arr.length; i++) {
    // 이미 정렬한 부분은 skip(i 만큼)
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
};

let bubbleSort_v3 = function (arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};

let init_array = [6, 5, 1, 3, 2, 4];
let array = [...init_array];
bubbleSort_v3(array);
console.log(array);
