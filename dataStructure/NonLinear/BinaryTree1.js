// value와 left, right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// 시작 노드인 root를 저장하기 위한 생성자
function BinaryTree() {
  this.root = null;
}

// 재귀로 트리를 순회하며 노드 추가하는 내부 메서드
BinaryTree.prototype._insertNode = function (node, value) {
  // 현재값과 비교
  // 작으면 왼쪽, 크면 오른 쪽.
  // 왼쪽 오른 쪽에 left, right pointer가 비어있다면 추가할 노드 연결.
  // 비어있지 않다면 하위 노드에서 다시 비교하도록 넘겨준다.

  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value > node.value) {
    node.right = this._insertNode(node.right, value);
  }
  return node;
};

// 노드 추가
BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

// TC

let tree = new BinaryTree();

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
