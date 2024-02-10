// 큐 최적화

function Queue(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
}

Queue.prototype.enqueue = function (element) {
  return (this.array[this.tail++] = element);
};

Queue.prototype.dequeue = function () {
  if (this.tail === this.head) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
};

// delete 방식의 문제 -> 희소배열이라 여전히 length는 그대로임
Queue.prototype.length = function () {
  return this.array.length;
};

// TC
let q = new Queue([1, 2]);
console.log(q);

q.enqueue(3);
q.enqueue(4);
console.log(q);

console.log(q.dequeue());
console.log(q.length());
