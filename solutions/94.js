/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * 94. Binary Tree Inorder Traversal (Medium)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var stack = [];
    var output = [];
    var currentNode = undefined;
    
    if (root !== null) {
        stack.push(root);
    }
    
    while (stack.length > 0) {
        currentNode = stack.pop();
        
        if (currentNode.right !== null && !currentNode.processed) {
            stack.push(currentNode.right);
        }
        if (currentNode.left !== null && !currentNode.processed) {
            currentNode.processed = true;
            stack.push(currentNode);
            stack.push(currentNode.left);
        } else {
            output.push(currentNode.val);
        }
    }
    
    return output;
};