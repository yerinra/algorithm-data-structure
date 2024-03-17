// 데크
// Double Ended Queue
// 삽입과 삭제가 양쪽 끝에서 모두 발생할 수 있는 선형 자료구조

// 초기 속성값 설정을 위한 생성자 함수
function Deque(array = []) {
  this.array = array;
}

// 객체 내 데이터셋 반환
Deque.prototype.getBuffer = function () {
  return this.array.slice();
};

// 데이터 비어있는지 확인
Deque.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// TC
let dq = new Deque([1, 2, 3]);

console.log(dq);

let data = dq.getBuffer();

console.log(data === dq.array);
console.log(data);

console.log(dq.isEmpty());

console.log(Object.getOwnPropertyDescriptors(Deque.prototype));
