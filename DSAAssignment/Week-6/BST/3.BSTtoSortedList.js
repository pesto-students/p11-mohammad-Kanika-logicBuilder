function BSTToSortedList(root){
    ans=[];
    inOrderTraversal(root,ans);
}
function inOrderTraversal(root,ans){
    if(root==null){
        return;
    }
    inOrderTraversal(root.left,ans);
    ans.push(root.data);
    inOrderTraversal(root.right,ans);
}