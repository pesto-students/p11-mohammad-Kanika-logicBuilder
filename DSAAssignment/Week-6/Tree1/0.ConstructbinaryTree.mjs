// 0. Construct binary tree from level order traversal

function TreeNode (data) {
    this.data = data;
    this.left = this.right = null;
}

export function constructBinaryTree(arrOFLevelOrder) {
    if (!arrOFLevelOrder || arrOFLevelOrder.length === 0) {
      return null;
    }
  
    const len = arrOFLevelOrder.length;
    const root = new TreeNode(arrOFLevelOrder[0]);
    const queue = [root];
  
    for (let i = 1; i <len; i += 2) {
      const currentNode = queue.shift();
      if(currentNode==null){
            continue;
      } 
    currentNode.left = i<len && arrOFLevelOrder[i]!==null ?new TreeNode(arrOFLevelOrder[i]) : null;
    queue.push(currentNode.left);
    currentNode.right = i+1<len && arrOFLevelOrder[i + 1]!==null ? new TreeNode(arrOFLevelOrder[i + 1]) : null;
    queue.push(currentNode.right);
    }
  
    return root;
  }
  function preOrderTraversal(root,ans){
      if(root==null){
          return;
      }
      ans.push(root.data);
      preOrderTraversal(root.left,ans);
      preOrderTraversal(root.right,ans);
  }


  