// Graph() : edge object 객체 저장을 위한 생성자
// key: vertex 정점
// value : list 형태로 연결된 vertex를 표현하여 edge 연결 관계 표현
// 재귀

function Graph() {
  this.edge = {};
  this.visited = {};
}

// 정점 추가
Graph.prototype.addVertext = function (v) {
  this.edge[v] = [];
  this.visited[v] = false;
};

// 간선 추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
};

// 간선 삭제
Graph.prototype.removeEdge = function (v1, v2) {
  if (this.edge[v1]) {
    let idx = this.edge[v1].indexOf(v2);

    if (idx != -1) this.edge[v1].splice(idx, 1);

    if (this.edge[v1].length === 0) delete this.edge[v1];
  }
};

// 정점 삭제
Graph.prototype.removeVertext = function (v) {
  if (this.edge[v] === undefined) return;

  let length = this.edge[v].length; // changed length;
  let connectedVertex = [...this.edge[v]];

  for (let i = 0; i < length; i++) {
    this.removeEdge(v, connectedVertex[i]);
  }
};

// 정점 개수 반환
Graph.prototype.sizeVertext = function () {
  return Object.keys(this.edge).length;
};

// 간선 개수 반환
Graph.prototype.sizeEdge = function (vertex) {
  return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
};

// 현재 Graph 연결 상태 출력
Graph.prototype.print = function () {
  for (let vertex in this.edge) {
    let neighbors = this.edge[vertex];
    if (neighbors.length == 0) continue;

    process.stdout.write(`${vertex} -> `);
    for (let j = 0; j < neighbors.length; j++) {
      process.stdout.write(`${neighbors[j]} `);
    }

    console.log("");
  }
};

Graph.prototype.dfs = function (startVertex) {
  this._dfsRecursiveVisit(startVertex);
};

Graph.prototype._dfsRecursiveVisit = function (vertex) {
  // 1. 종료 조건
  if (this.visited[vertex]) return;

  //
  this.visited[vertex] = true;
  console.log(`visit, ${vertex}`);

  let neighbors = this.edge[vertex];
  // 2. 재귀 호출 하면서 수행해야 할 코드
  for (let i = 0; i < neighbors.length; i++) {
    this._dfsRecursiveVisit(neighbors[i]);
  }
};

// TC
let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertext(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.print();
console.log("");

graph.dfs("A");
