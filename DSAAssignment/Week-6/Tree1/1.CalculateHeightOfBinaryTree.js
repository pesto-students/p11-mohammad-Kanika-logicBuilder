var height = function(root) {
    if(root==null){
        return 0;
    }
    let leftSubTreeHeight= maxDepth(root.left);
    let rightSubTreeHeight= maxDepth(root.right);
    return Math.max(leftSubTreeHeight,rightSubTreeHeight)+1
    
};
// Height of a binary tree is the number of nodes in the longest path from the root node to the leaf node.
// Height depth and level of a node in a tree are all the same.
// Height of a tree is the height of the root node.
// Height of a leaf node is 1.
// leetcode 104. Maximum Depth of Binary Tree - 
//https://leetcode.com/problems/maximum-depth-of-binary-tree/