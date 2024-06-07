// 삽입 정렬
// 이미 정렬된 데이터 영역과 비교하면서, 자신의 위치를 찾아 요소를 삽입하며 정렬하는 알고리즘
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

let insertionSort = function (arr, compare) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      arr[j + 1] = arr[j];
      if (compare(temp, arr[j])) break;
    }
    arr[j + 1] = temp;
  }
};

// TC
let init_array = [6, 5, 1, 3, 2, 4];
let array;

let sorting = [insertionSort];
let order = [asc, desc];

for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);

    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
