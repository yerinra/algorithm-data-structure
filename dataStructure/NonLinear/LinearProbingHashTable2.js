const HASH_SIZE = 5; // 충돌을 위해 변경

// key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// 생성자
function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// 해시 함수
LinearHashTable.prototype.hashCode = function (key) {
  let hash = 0;

  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// 초기화
LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// 크기 반환
LinearHashTable.prototype.size = function () {
  return this.length;
};

// 데이터셋 반환
LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) array.push(this.table[i]);
  }
  return array;
};

// 데이터셋 출력
LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + " -> " + this.table[i].key + ": " + this.table[i].value);
    }
  }
};

// 데이터 추가
LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let startIndex = index;

  console.log(`key: ${key} -> index: ${index}`);

  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, value);
      this.length++;
      return true;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return false;
};

let lht = new LinearHashTable();

lht.put("Ana", 172);
lht.put("John", 179);
lht.put("Donnie", 183);
lht.put("Mindy", 190);
console.log(lht.put("Paul", 168));

// collision
console.log(lht.put("Sue", 163));
console.log("");

lht.print();
console.log(lht.getBuffer());
console.log(lht);

lht.clear();
console.log(lht);
