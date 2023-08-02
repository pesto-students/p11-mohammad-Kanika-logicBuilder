// import from folder Tree1 file 0.ConstructbinaryTree.js
import {constructBinaryTree} from '../Tree1/0.ConstructbinaryTree.mjs'
// now from this call constructBinaryTree(arrOFLevelOrder) we will get root of the tree
let root = constructBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);
let lowestCommonAncestor = function(root, p, q) {
       /*if i have found p in left subtree than i will look for q in right subtree
     if q is not present in right subtree than p is the lowest common ancestor 
     it mean q is present in left subtree at lower level than p
     so p is the lowest common ancestor*/

    if(root===null || root.data==p || root.data==q) return root 
    let left= lowestCommonAncestor(root.left,p,q);
    let right= lowestCommonAncestor(root.right,p,q);
    if(left==null) return right
    else if (right===null) return left
    return root   
};
lowestCommonAncestor(root,5,1);
// Three situations can arise:
// 1. p and q are present in left subtree
// 2. p and q are present in right subtree
// 3. p is present in one subtree and q is present in other subtree
// if i have found p in any of the subtree than i will look for q in other subtree
// if i dont find q in other subtree than p is the lowest common ancestor and vice versa


