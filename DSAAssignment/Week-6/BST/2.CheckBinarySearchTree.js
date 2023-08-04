var isValidBST = function(root) {
    min=-Infinity
    max=Infinity
   function helper(root,min,max){
      // if any node does not have a left or right child, then it is a valid BST
      // If any node value becomes null we return true to the call stack
       if(root==null)
       return true
        // if the root value < than min value or > than the max value, 
        //then it is not a valid BST
        /*They moment we find out that the root value is not in the range of min and max,
         we return false to the call stack
        At this point we stop the recursion and return false to the call stack
        */
       if(root.val<=min || root.val>=max) return false;
       // We check the left subtree and right subtree recursively
       /* we make max value as root.val because 
         the left subtree should have values less than the root value*/
       leftValid= helper(root.left,min,root.val)
       /*
          We make min value as root.val because
            the right subtree should have values greater than the root value
        */
       rightValid= helper(root.right,root.val,max);
       return leftValid && rightValid

    }
   return  helper(root,min,max)    
};
//https://leetcode.com/problems/validate-binary-search-tree/description/
// Time Complexity: O(n) - we are visiting each node once
// Space Complexity: O(n) - we are using the call stack to store the recursive calls
// The the max no of node that can be in call stack is n( Tree is skewed)

// Thought Process 
/* If my Grand Parent is in left subtree and moving in right subtree, 
than node value should be greater than parent and less than grand parent*/
/*
 If my Grand Parent is in right subtree and moving in left subtree,
    than node value should be less than parent and greater than grand parent
 */
// One more approch can we traverse BST In order , store it in array and check if it is sorted or not
