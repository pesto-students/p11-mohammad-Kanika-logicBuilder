//https://leetcode.com/problems/invert-binary-tree/submissions/
// node structure
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// Create a Tree
function newNode(data) {
    let node = new Node(data);
    return node;
}
let root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);

function InvertTree(root) {
    if (root == null) {
        return;
    }
    InvertTree(root.left);
    InvertTree(root.right);
    temp=root.left;
    root.left=root.right;
    root.right=temp;

}
let noofLeafNode=InvertTree(root);
traversal(root);
function traversal(root){
    if(root==null){
        return root;
    }
    traversal(root.left);
    console.log(root.data);
    traversal(root.right);

}

