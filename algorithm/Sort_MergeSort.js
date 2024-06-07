// 병합 정렬
// 하나의 배열을 두 개의 균등한 크기로 분할하고, 부분 정렬하여 이를 다시 합하면서 전체를 정렬해가는 아록리즘
// 평균 시간 복잡도 : O(nlogn)

let swap = function (arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

// true일 경우 정렬해야함을 의미.
let asc = function (x, y) {
  return x > y;
};

let desc = function (x, y) {
  return x < y;
};

let mergeSort = function (arr, compare) {
  if (arr.length === 1) return arr;

  let m = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, m), compare);
  let right = mergeSort(arr.slice(m), compare);

  let i = 0,
    j = 0,
    k = 0;
  while (i < left.length && j < right.length) {
    arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++];
  }
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];

  return arr;
};

// TC
let init_array = [6, 5, 1, 3, 2, 4];
let array;

let sorting = [mergeSort];
let order = [asc, desc];

for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);

    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
