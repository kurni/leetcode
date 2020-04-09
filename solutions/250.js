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
    isUnivalSubtree(root);
    
    return count;
};

var isUnivalSubtree = function(root) {
    var isCurrentNodeUnival = false;
    var isLeftSubtreeUnival = false;
    var isRightSubtreeUnival = false;
    
    if (root === null) return true;
    
    if ((root.left === null && root.right === null)
        || (root.left !== null && root.right !== null && root.val === root.left.val
            && root.val === root.right.val)
        || (root.left === null && root.right !== null && root.val === root.right.val)
        || (root.left !== null && root.right === null && root.val === root.left.val))
    {
        isCurrentNodeUnival = true;
    }
    
    isLeftSubtreeUnival = isUnivalSubtree(root.left);
    isRightSubtreeUnival = isUnivalSubtree(root.right);
    
    if (isCurrentNodeUnival && isLeftSubtreeUnival && isRightSubtreeUnival) {
        count++;
        return true;
    }
    
    return false;
};