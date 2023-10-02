import { Graph } from "./0.ConstructAGraph.mjs";
class DFSTraversal {
  constructor(graph) {
    this.graph = graph;
    this.Result = [];
    this.visited = new Array(graph.noOfVertices).fill(false);
  }
  DFS(vertex) {
    for (let eachVertex = 0;eachVertex < this.graph.noOfVertices;eachVertex++) {
      if (this.visited[eachVertex] == false) {
        this.DFSHelper(eachVertex);
      }
    }
  }
  DFSHelper(vertex) {
    this.visited[vertex] = true;
    this.Result.push(vertex);
    this.graph.adjList.get(vertex).forEach((eachNeighbour) => {
      if (this.visited[eachNeighbour] == false) {
        this.DFSHelper(eachNeighbour);
      }
    });
  }
//   DFSHelperWithMAtrix(vertex) {
//     // this.visited[vertex] = false;
//     // this.Result.push(vertex);
//     // for (let eachNeighbour = 0; eachNeighbour < this.noOfVertices;eachNeighbour++) {
//     //   if (this.graph.matrix[vertex][eachNeighbour] == 1 && this.visited[vertex] == false) {
//     //     DFSHelperWithMAtrix(eachNeighbour);
//     //   }
//     //}
//   }
}
let graph = new Graph(
  10,
  [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [3, 4],
    [3, 5],
    [4, 5],
    [4,6],
    [6,7],
    [2,9]
  ],
  false
);
graph.MakeAdjList();
graph.MakeMatrix();
let dfs = new DFSTraversal(graph);
dfs.DFS();
console.log(dfs.Result);
// Time complexity of DFS is O(V+E) where V is the number of vertices and E is the number of edges in the graph.
// For loop inside the DFS function will run V times ( No of vertices)
// For Each loop inside the DFSHelper function will run E times ( No of edges)
// For each vertex DFSHelper call itself is equal to the number of edges of that vertex have
// So total time complexity is O(V+E)
// Space complexity of DFS is O(V) where V is the number of vertices in the graph.
