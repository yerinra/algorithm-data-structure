class Queue {
  constructor(array) {
    this.array = array ? array : [];
    this.size = 0;
  }

  // 객체 내 데이터셋 반환
  getBuffer() {
    return this.array.slice();
  }

  // 객체 내 데이터 존재 여부 파악
  isEmpty() {
    return this.array.length == 0;
  }

  // 데이터 추가
  enqueue(element) {
    return this.array.push(element);
  }

  // 데이터 삭제
  dequeue() {
    return this.array.shift();
  }

  // 가장 첫 데이터 반환
  front() {
    return this.array.length === 0 ? undefined : this.array[0];
  }

  // 큐 내 데이터 개수 확인
  length() {
    return this.array.length;
  }

  // 큐 초기화
  clear() {
    this.array = [];
  }
}

// TC
let q = new Queue([1, 2, 3, 4]);

q.dequeue();
console.log(q);

console.log(q.length());
q.clear();
console.log(q);
console.log(q.length());
