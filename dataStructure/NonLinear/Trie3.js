// 문자값과 단어 여부값 저장을 위한 노드 생성자
function TrieNode() {
  this.children = {};
  this.endOfWord = false;
}

// 노드의 시작인 루트 노드 저장을 위한 생성자
function Trie() {
  this.root = new TrieNode();
}

// 문자열 추가
Trie.prototype.insert = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    if (node === undefined) {
      node = new TrieNode();
      current.children[ch] = node;
    }
    current = node;
  }
  current.endOfWord = true;
};

// 문자열 검색
Trie.prototype.search = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    if (node === undefined) {
      return false;
    }
    current = node;
  }
  return current.endOfWord;
};

// 문자열 삭제
Trie.prototype.delete = function (word, current = this.root, index = 0) {
  if (index === word.length) {
    if (!current.endOfWord) return false;
    current.endOfWord = false;

    return Object.keys(current.children).length === 0;
  }

  let ch = word[index];
  let node = current.children[ch];

  if (node === undefined) return false;
  let isDeleteNode = this.delete(word, node, index + 1) && !node.endOfWord;
  if (isDeleteNode) {
    delete current.children[ch];
    return Object.keys(current.children).length === 0;
  }
  return false;
};

// TC
let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie.search("bee"));
trie.delete("bear");
console.log(trie.search("bee"));
trie.delete("b");
console.log(trie.search("bee"));
trie.delete("bee");
console.log(trie.search("bee"));
