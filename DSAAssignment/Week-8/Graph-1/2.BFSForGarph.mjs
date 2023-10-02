import { Graph } from "./0.ConstructAGraph.mjs";
class BFSTravel{
    constructor(graph){
        this.graph=graph;
        this.visited = new Array(graph.noOfVertices+1).fill(false);
        this.result=[]
    }
    BFSTraversal(vertex){

        // we push the first node in the que 
        // we iterate for every level
        // we iterate throught he queue till queuue is emp
        let q=[];
        q.push(vertex);
        this.visited[vertex]=true;
        while(q.length!==0){
            //noOfElementsInLevel=q.length;
            let el = q.pop();
            this.result.push(el);
            this.graph.adjList.get(el).forEach(neighbourNode =>{
                if(this.visited[neighbourNode]==false){
                    q.push(neighbourNode);
                    this.visited[neighbourNode]=true;
                }
            }
            );
            
        }
    }
    
}
let graph = new Graph(5,[[1,2],[1,3],[2,4],[4,5],[4,3],[5,3]],false);
graph.MakeAdjList();
graph.MakeMatrix();
let bfs = new BFSTravel(graph);
bfs.BFSTraversal(4);
console.log(bfs.result);
// Outer for loop will iterate over the no of vertices
/* Inner for loop will iterate over the no of edges
    We have total no of edges is 2E ( As we are adding the edge in both the direction)*/
// So total time complexity is O(V+2E)
// Spcae complexity is addList + visited + result + queue = O(V+E) + O(V) + O(V) + O(V) = O(V+E)

