var kthSmallest = function(root, k) {

    let res=null
    function kthSmallestHelper(root){
        if(root==null) return
        if(res) return res
        kthSmallestHelper(root.left);
        k=k-1
        if(k==0){
            res=root.val;
            return 
        }
        return kthSmallestHelper(root.right)
    } 
    kthSmallestHelper(root);
    return res;
  };
  //https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/