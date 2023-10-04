var isSymmetric = function(root) { 
    if(root==null)return false
    return isTrue(root.left,root.right)
    /* we divide the tree into two subtree left and right subtree
      we consider right subtree as root1
     we consider left subtree as root2*/
    function isTrue(root1,root2)
    {
       // we check if root1 and root2 is null then return true means both subtree is null
        if(root1==null && root2==null){
            return true
        }
        // if any one of the subtree is null then return false
        // because one subtree is null and another is not null it means they are not symmetric
         if(root1==null || root2==null){
             return false
         }
         // if both node value is not equal we stop the recursion and return false
        if(root1.val!=root2.val){
           return false
        }
        // we check if left subtree of root1 is equal to right subtree of root2
        let x= isTrue(root1.left,root2.right);
        // we check if right subtree of root1 is equal to left subtree of root2
        let y= isTrue(root1.right,root2.left);
       return x&&y
       // i didnt got first 3 line of this code +
       // i took let subtreee and right subtree as two different tree 
       // i traversed one from left to right and another from right to left 
    }
    
};


// Time Complexity: O(n) - because we are traversing each node once
// Leet code link - https://leetcode.com/problems/symmetric-tree/