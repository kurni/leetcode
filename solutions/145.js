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
    var currentNode = null;
    
    if (root !== null) {
        stack.push(root);
    }
        
    while (stack.length > 0) {
        currentNode = stack.pop();
        output.unshift(currentNode.val);
        
        if (currentNode.left !== null) {
            stack.push(currentNode.left);
        }
        if (currentNode.right !== null) {
            stack.push(currentNode.right);
        }
    }
    
    return output;
};