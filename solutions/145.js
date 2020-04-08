/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * 145. Binary Tree Postorder Traversal (Hard)
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
var postorderTraversal = function(root) {
    var stack = [];
    var output = [];
    var currentNode = root;
        
    while (currentNode !== null || stack.length > 0) {
        while (currentNode !== null && !currentNode.processed) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        
        currentNode = stack.pop();
        if (currentNode.right === null || currentNode.processed) {
            output.push(currentNode.val);
            currentNode = null;
        } else {
            currentNode.processed = true;
            stack.push(currentNode);
            currentNode = currentNode.right;
        }
    }
    
    return output;
};