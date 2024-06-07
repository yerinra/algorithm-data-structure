// 퀵 정렬
// 특정한 값(pivot)을 기준으로 큰 숫자와 작은 숫자를 분할하여 정렬
// 평균 시간 복잡도: O(nlogn)

let swap = function (arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

let asc = function (x, y) {
  return x > y;
};

let desc = function (x, y) {
  return x < y;
};

let quickSort = function (arr, compare, s = 0, e = arr.length - 1) {
  let start = s;
  let pivot = arr[e];

  for (let i = s; i <= e; i++) {
    if (compare(pivot, arr[i])) {
      swap(arr, start, i);
      start++;
    }
  }

  swap(arr, start, e);

  if (start - 1 > s) {
    quickSort(arr, compare, s, start - 1);
  }
  if (start + 1 < e) {
    quickSort(arr, compare, start + 1, e);
  }
};

// TC
let init_array = [6, 5, 1, 3, 2, 4];
let array;

let sorting = [quickSort];
let order = [asc, desc];

for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);

    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
