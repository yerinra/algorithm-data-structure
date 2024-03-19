// value 와 left, right node 저장을 위한 생성자.
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// 시작 노드인 root를 저장하기 위한 생성자
function BinarySearchTree() {
  this.root = null;
}

// 재귀로 트리를 순회하며 중위 순회하는 내부 메서드
BinarySearchTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) return;

  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callbback);
};

// 중위 순회하며 노드 출력
BinarySearchTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
  console.log("end");
};

// 재귀로 트리를 순회하며 노드 추가하는 내부 메서드
BinarySearchTree.prototype._insertNode = function (node, value) {
  if (node === null) node = new Node(value);
  else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value >= node.value) {
    node.right = this._insertNode(node.right, value);
  }
  return node;
};

// 노드 추가
BinarySearchTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

// TC
let tree = new BinarySearchTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);
