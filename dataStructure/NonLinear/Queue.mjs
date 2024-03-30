// 생성자 함수로 초기 데이터 설정
function Queue(array = []) {
  this.array = array;
}

// 객체 내 데이터셋 반환
Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

// 객체 내 데이터 존재 여부 파악
Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

// 데이터 추가
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

// 데이터 삭제
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

// 가장 첫 데이터 반환
Queue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0];
};

// 큐 내 데이터 개수 확인
Queue.prototype.size = function () {
  return this.array.length;
};

// 큐 초기화
Queue.prototype.clear = function () {
  this.array = [];
};

export { Queue };
