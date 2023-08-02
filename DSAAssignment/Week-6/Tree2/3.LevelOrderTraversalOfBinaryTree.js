// we do level order traversal with BFS 
var levelOrder = function(root) {
    var queue = [];
    queue.push(root);
    var ans=[]
    // if root is null means tree is empty so return empty array
    if(root==null){
     return ans   
    }
    /*we run the outer loop till the queue is empty.
      Queue will have the nodes of the current level.
      when queue is empty it means that we have traversed all level 
       if at any point i check the queue it will hold the nodes of the current level only.*/
    while (queue.length != 0) {
        level=[];
        noOfNodesAtEachLevel=queue.length
        /*we run the inner for loop for the no of nodes at each level
         by doing the this all the child of current level will be pushed in the queue*/
        for(let i=0;i<noOfNodesAtEachLevel;i++){
             let tempNode = queue.shift();
             level.push(tempNode.val);
               // Enqueue left child only if it is not null
            if (tempNode.left != null)  queue.push(tempNode.left);
             // Enqueue right child only if it is not null
            if (tempNode.right != null)  queue.push(tempNode.right);
        }
        ans.push(level); 
    }
    return ans;   
    
};
// Time Complexity: O(n) - because we are traversing each node once
/*Space Complexity: O(n) - because we are using queue to store the nodes of the current level 
in worst case the queue will have n/2 nodes at last level*/

// Leet code link -https://leetcode.com/problems/binary-tree-level-order-traversal/description/

