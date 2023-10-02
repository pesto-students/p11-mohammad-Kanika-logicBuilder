// Create Graph using Adjacency Matrix
export class Graph {
  constructor(noOfVertices, edges, directed = false) {
    this.noOfVertices = noOfVertices;
    this.edges = edges;
    this.matrix = null;
    this.adjList = null;
    this.directed = directed;
  }
  MakeMatrix() {
    // matrix is a 2D array
    // First we make a 1D array of size noOfVertices
    this.matrix = new Array(this.noOfVertices);
    // Now we make each element of the 1D array as a 1D array of size noOfVertices
    for (let i = 1; i <= this.noOfVertices; i++) {
      this.matrix[i] = new Array(this.noOfVertices).fill(0);
    }
    // Now we make a for loop to iterate over the edges array
    // forEach can only be used on iterable objects like arrays
    // when i do array.foreach inside the foreach loop it will iterate over the array
    if (this.directed) {
      this.edges.forEach((edge) => {
        this.matrix[edge[0]][edge[1]] = 1;
        this.matrix[edge[1]][edge[0]] = 1;
      });
    } else {
      this.edges.forEach((edge) => {
        this.matrix[edge[0]][edge[1]] = 1;
      });
    }
    return this.matrix;
  }
  MakeAdjList() {
    this.adjList = new Map();
    for (let i = 1; i <= this.noOfVertices; i++) {
      this.adjList.set(i, []);
    }
    if (this.directed==false) {
      this.edges.forEach((edge) => {
        this.adjList.get(edge[0]).push(edge[1]);
        this.adjList.get(edge[1]).push(edge[0]);
      });
    } else {
      this.edges.forEach((edge) => {
        this.adjList.get(edge[0]).push(edge[1]);
      });
    }
  }
  MakeAdhListWithMatrix(matrix) {
    this.adjList = new Map();
    for (let i = 0; i < this.noOfVertices; i++) {
      this.adjList.set(i, []);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 1) {
          this.adjList.get(i).push(j);
        }
      }
    }

  }
}
// const noOfVertices = 5;
// const edge = [[0, 1], [0, 4], [1, 2], [1, 3], [1, 4], [2, 3], [3, 4]];
// const graph = new Graph(noOfVertices, edge, true);
// console.log(graph.MakeMatrix());
