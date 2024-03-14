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

// TC
let dic = new Dictionary({ age: 10, name: "nicole" });

console.log(dic);

console.log(dic.getBuffer());
console.log(dic.size());

dic.clear();
console.log(dic);
