import {constructBinaryTree} from '../Tree1/0.ConstructbinaryTree.mjs'
// now from this call constructBinaryTree(arrOFLevelOrder) we will get root of the tree
let root = constructBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);
var hasPathSum = function(root, targetSum) {
    // if root==null return false 
    // will solve this with help of pre order 
    // we will calculate all the possiblity of root to leaf 
    // when we reach the leaf node if we check wether targetSum is equal to the root.val 
    // if yes we return true else we return false
    if(root==null) return false
    if (root.left==null && root.right==null) return targetSum===root.val
    let x=hasPathSum(root.left,targetSum-root.val);
    let y=hasPathSum(root.right,targetSum-root.val);
    return x||y   
};
console.log(hasPathSum(root,8));
