/**
 * https://leetcode.com/problems/count-univalue-subtrees/
 * 250. Count Univalue Subtrees (Medium)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var count = 0;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
    count = 0;
    countUnivalSubtreesRecursive(root);
    
    return count;
};

var countUnivalSubtreesRecursive = function(root) {
    if (root === null) return;
    
    if ((root.left === null && root.right === null)
        || (root.left !== null && root.right !== null && root.val === root.left.val
            && root.val === root.right.val)
        || (root.left === null && root.right !== null && root.val === root.right.val)
        || (root.left !== null && root.right === null && root.val === root.left.val))
    {
        count++;
    }
    
    countUnivalSubtreesRecursive(root.left);
    countUnivalSubtreesRecursive(root.right);
    
    return;
};