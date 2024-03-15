// Hash Table

const HASH_SIZE = 37;

// key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// 해시 함수
HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// TC
let ht = new HashTable();

console.log(ht);
console.log(ht.hashCode("Anne"));
console.log(ht.hashCode("Joe"));
