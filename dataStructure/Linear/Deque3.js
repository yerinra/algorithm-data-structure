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

// 앞쪽 데이터 추가
Deque.prototype.pushFront = function (element) {
  return this.array.unshift(element);
};

// 앞쪽 데이터 삭제
Deque.prototype.popFront = function () {
  return this.array.shift();
};

// 뒤쪽 데이터 추가
Deque.prototype.pushBack = function (element) {
  return this.array.push(element);
};

// 뒤쪽 데이터 삭제
Deque.prototype.popBack = function () {
  return this.array.pop();
};

// 가장 첫 데이터 반환
Deque.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0];
};

// 가장 끝 데이터 반환
Deque.prototype.back = function () {
  return this.array.length === 0
    ? undefined
    : this.array[this.array.length - 1];
};

// 큐 내 데이터 개수 확인
Deque.prototype.size = function () {
  return this.array.length;
};

// 큐 초기화
Deque.prototype.clear = function () {
  this.array = [];
};

// TC
let dq = new Deque([1, 2, 3]);

console.log(dq);

console.log(dq.front());
console.log(dq.back());
console.log(dq.size());

dq.clear();
console.log(dq);
