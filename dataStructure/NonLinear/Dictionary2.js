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

// TC
let dic = new Dictionary();
dic.set("age", 19);
dic.set("name", "nicole");
dic.set("height", 178);
console.log(dic);

dic.remove("age");
console.log(dic);

console.log(dic.has("age"));
console.log(dic.get("age"));
console.log(dic.has("name"));
console.log(dic.get("name"));
