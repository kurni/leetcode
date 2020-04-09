/**
 * https://leetcode.com/problems/path-sum/
 * 112. Path Sum (Easy)
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    return hasPathSumRecursive(root, sum, 0);
};

var hasPathSumRecursive = function(root, sum, currentSum) {
    if (root === null) return false;
    
    currentSum += root.val;
    if (root.left === null && root.right === null) return sum === currentSum;
    
    return hasPathSumRecursive(root.left, sum, currentSum)
        || hasPathSumRecursive(root.right, sum, currentSum);
};