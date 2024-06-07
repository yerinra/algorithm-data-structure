// 선택 정렬
// 최솟값을 찾아 데이터 영역의 가장 앞으로 이동하는 방식을 반복하여 전체 데이터 영역을 정렬
// 평균 시간 복잡도 O(n**2)

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

let selectionSort = function (arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j;
    }
    swap(arr, i, k);
  }
};

// TC
let init_array = [6, 5, 1, 3, 2, 4];
let array;

let sorting = [selectionSort];
let order = [asc, desc];

for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);

    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
