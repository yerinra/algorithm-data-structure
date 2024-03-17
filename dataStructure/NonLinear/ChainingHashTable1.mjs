import { LinkedList } from "./LinkedListModule.mjs";

const HASH_SIZE = 37;

// key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// 생성자
function ChainingHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// 해시 함수
ChainingHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// 초기화
ChainingHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// 크기 변환
ChainingHashTable.prototype.size = function () {
  return this.length;
};

// TC
let cht = new ChainingHashTable();
console.log(cht);

console.log(cht.hashCode("Ana"));

let ll = new LinkedList();
ll.append(new Element("Ana", 172));
console.log(ll);
