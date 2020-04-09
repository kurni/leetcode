/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * 102. Binary Tree Level Order Traversal (Medium)
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var output = [];
    var currentOutput = [];
    var currentQueue = [];
    var nextQueue = [];
    var currentNode = null;
    
    if (root !== null) {
        currentQueue.push(root);
    }
    
    while (currentQueue.length > 0) {
        currentOutput = [];
        nextQueue = [];
        
        while (currentQueue.length > 0) {
            currentNode = currentQueue.shift();
            currentOutput.push(currentNode.val);
            
            if (currentNode.left !== null) {
                nextQueue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                nextQueue.push(currentNode.right);
            }
        }
        
        output.push(currentOutput);
        currentQueue = nextQueue;
    }
    
    return output;
};