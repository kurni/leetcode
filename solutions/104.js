/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 104. Maximum Depth of Binary Tree (Easy)
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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    var depthLeft = maxDepth(root.left);
    var depthRight = maxDepth(root.right);
    
    return Math.max(depthLeft, depthRight) + 1;
};