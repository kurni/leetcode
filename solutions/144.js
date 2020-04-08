/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 * 144. Binary Tree Preorder Traversal (Medium)
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
var preorderTraversal = function(root) {
    var stack = [];
    var output = [];
    var currentNode = null;
    
    if (root !== null) {
        stack.push(root);
    }
    
    while (stack.length > 0) {
        // process current node
        currentNode = stack.pop();
        output.push(currentNode.val);
        
        // add children to stack for further processing
        if (currentNode.right !== null) {
            stack.push(currentNode.right);
        }
        if (currentNode.left !== null) {
            stack.push(currentNode.left);
        }
    }
    
    return output;
};