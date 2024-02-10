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
}

// TC
let q = new Queue([1, 2]);
console.log(q);

q.enqueue(3);
console.log(q);
q.dequeue();
console.log(q);
