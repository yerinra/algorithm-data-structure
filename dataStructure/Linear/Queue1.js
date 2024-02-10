class Queue {
  constructor(array = []) {
    // this.array = array ? array : [];
    this.array = array;
    this.size = 0;
  }

  // 객체 내 데이터셋 반환
  getBuffer() {
    // return [...this.array]
    return this.array.slice();
  }

  // 객체 내 데이터 존재 여부 파악
  isEmpty() {
    return this.array.length == 0;
  }
}

/* 생성자 함수로 만들기 
function Queue(array = []) {
  this.array = array;
}

Queue.prototype.getBuffer = function () {
  return [...this.array];
};

// TC
let q = new Queue([1, 2, 3]);

console.log(q);

let data = q.getBuffer();
console.log(data);

console.log(data === q.array);
console.log(Object.getOwnPropertyDescriptors(Queue.prototype));
*/
