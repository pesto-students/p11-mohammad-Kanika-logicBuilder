// node structure
class Node {
    // Define a class called Node to represent a node in a binary tree
   
        // Define a constructor method that takes a data parameter to initialize the node's data property
        constructor(data) {
            // Set the node's data property to the value of the data parameter
            this.data = data;
            // Set the node's left property to null to indicate that it has no left child node
            this.left = null;
            // Set the node's right property to null to indicate that it has no right child node
            this.right = null;
        }
    
}
// Create a Tree
function newNode(data) {
    let node = new Node(data);
    
    return node;
}

// Create a new node with value 1 and assign it as the root of the tree
let root = newNode(1);

// Create two child nodes with values 2 and 3 and assign them as the left and right children of the root node, respectively
root.left = newNode(2);
root.right = newNode(3);

// Create two child nodes with values 4 and 5 and assign them as the left and right children of the left child of the root node, respectively
root.left.left = newNode(4);
root.left.right = newNode(5);


function countLeafNode(root) {
    if (root == null) {
        return 0;
    }
    if (root.left == null && root.right == null) {
        return 1;
    }
    return countLeafNode(root.left) + countLeafNode(root.right);
}
let noofLeafNode=countLeafNode(root);
console.log(noofLeafNode);



