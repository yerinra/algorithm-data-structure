import { Queue } from "./Queue.mjs";
import { Stack } from "./Stack.mjs";
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

// BFS 탐색
Graph.prototype.bfs = function (startVertex) {
  this._bfsLoopVisit(startVertex);
};

// 큐를 이용한 BFS 탐색
Graph.prototype._bfsLoopVisit = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visited "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      queue.enqueue(neighbors[i]);
    }
  }
};

// 다른 정점 간 최단 경로 비용 산출
Graph.prototype._bfsShortestPath = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  let distance = {};
  let pre_visit = {};

  for (let vertex in this.edge) {
    distance[vertex] = 0;
    pre_visit[vertex] = null;
  }

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visited "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      distance[neighbors[i]] = distance[vertex] + 1;
      pre_visit[neighbors[i]] = vertex;

      queue.enqueue(neighbors[i]);
    }
  }

  return { distance, pre_visit };
};

// from 정점에서 to 정점까지의 최단 경로 출력
Graph.prototype._from_to_path = function (pre_visit, from, to) {
  let stack = new Stack();

  for (let v = to; v !== from; v = pre_visit[v]) {
    stack.push(v);
  }
  stack.push(from);

  while (!stack.isEmpty()) {
    let v = stack.pop();
    process.stdout.write(`${v} -> `);
  }

  console.log("end");
};

// 다른 정점 간 최단 경로 탐색
Graph.prototype.shortestPath = function (startVertex) {
  let result = this._bfsShortestPath(startVertex);

  console.log(result.distance);
  console.log(result.pre_visit);

  for (let vertex in this.edge) {
    if (vertex == startVertex) continue;

    this._from_to_path(result.pre_visit, startVertex, vertex);
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

graph.shortestPath("A");
