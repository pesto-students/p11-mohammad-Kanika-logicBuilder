var mergeTrees = function(root1, root2) {

// If either root1 or root2 is null, return the non-null node (or null if both are null).
 if (root1 === null || root2 === null) {
    return root1 || root2;
}

// Merge the values of root1 and root2 and store the result in root1.
root1.val += root2.val;

// Recursively merge the left subtrees of root1 and root2.
root1.left = mergeTrees(root1.left, root2.left);

// Recursively merge the right subtrees of root1 and root2.
root1.right = mergeTrees(root1.right, root2.right);

// Return the merged tree rooted at root1.
return root1;
};

// Please put this code in leet code and test it 
