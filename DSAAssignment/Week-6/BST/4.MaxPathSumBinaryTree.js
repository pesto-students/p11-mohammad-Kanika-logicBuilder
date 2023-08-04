var maxPathSum = function(root) {
    function findMaxPathSum(root){     
        if(root==null){
            return 0
        }
        let leftSum = findMaxPathSum(root.left);
        let rightSum = findMaxPathSum(root.right);
        maxPathSum= Math.max(leftSum+rightSum+root.val,maxPathSum);
        return Math.max(leftSum+root.val,rightSum+root.val,0)
    }
     let maxPathSum=-Infinity;
    findMaxPathSum(root)
    return maxPathSum;
    
    
};
//https://leetcode.com/problems/binary-tree-maximum-path-sum/description/