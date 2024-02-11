// 원형 큐
// 원형 형태를 가지며, 먼저 넣은 데이터가 먼저 나오는 FIFO 기반의 선형 자료 구조

function CircularQueue(array = [], size = 5) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

// 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

// 객체 비어있는지 확인
CircularQueue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// 데이터 꽉 차있는지 확인
CircularQueue.prototype.isFull = function () {
  return this.length === this.size;
};

// TC
let cq = new CircularQueue([1, 2, 3]);
console.log(cq);

console.log(cq.isEmpty());
console.log(cq.isFull());
console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));
