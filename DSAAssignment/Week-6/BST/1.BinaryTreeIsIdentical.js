var isSameTree = function(p, q) {
    if(p==null && q==null)
    return true
    if(p==null || q==null)
    return false
    if(p.val !== q.val) return false
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)   
    // this is preorder travresal
    
};
//https://leetcode.com/problems/same-tree/
// Think about the base case first
// if both the node is null then return true
// if any one of the node is null then return false
// if both the node value is not equal then return false
/* THought process Before solving any Binary tree problem
   1. Think about the base case first (Think when to break the recursion)
   2. Think can it solved with traversal ( pre , post , in )
   3. Think about the return value*/