// 성능 측정 함수 구현
function benchmark(arr, callback) {
  let start = Date.now();

  callback(arr);

  return Date.now() - start;
}

// 정렬 성능측정
// bubble < selection < insert < <<< merge << quick 으로 갈수록 성능이 좋음
