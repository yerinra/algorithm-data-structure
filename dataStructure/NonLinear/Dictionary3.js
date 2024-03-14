// 딕서녀리
// key-value 형태로 저장

function Dictionary(items = {}) {
  this.items = items;
}

// 모든 개체 반환
Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

// 초기화
Dictionary.prototype.clear = function () {
  this.items = {};
};

// 크기 반환
Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

// 개체 존재 여부 확인(key 정보를 배열로 반환)
Dictionary.prototype.has = function (key) {
  // return value in this.items;
  return this.items.hasOwnProperty(key);
};

// 개체(entity) 추가
Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

// 개체의 value 반환
Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};

// 개체 삭제
Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};

// 모든 key 값을 배열 형태로 반환
Dictionary.prototype.keys = function () {
  return Object.keys(this.items);
};

// 모든 value 값을 배열 형태로 반환
Dictionary.prototype.values = function () {
  // return Object.values(this.items)
  let values = [];
  for (let k in this.items) {
    if (this.has(k)) values.push(this.items[k]);
  }
  return values;
};

// 모든 개체 요소에 대해 cb 함수 수행(forEach 비슷)
Dictionary.prototype.each = function (cb) {
  for (let k in this.items) {
    if (this.has(k)) cb(k, this.items[k]); // cb에 key, value 전달
  }
};

// TC
function printDictionary(key, value) {
  console.log(`key: ${key}`);
  console.log(`value: ${value}`);
}

let dic = new Dictionary();
dic.set("age", 19);
dic.set("name", "nicole");
dic.set("height", 178);
console.log(dic);

console.log(dic.keys());
console.log(dic.values());
dic.each(printDictionary);
