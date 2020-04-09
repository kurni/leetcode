/**
 * https://leetcode.com/problems/symmetric-tree/
 * 101. Symmetric Tree (Easy)
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }

    return isSymmetricRecursive(root);
    // return isSymmetricIterative(root);
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var getLeftBranchVals = function(root) {
    if (root === null) {
        return [null];
    }
    
    return [root.val].concat(getLeftBranchVals(root.left), getLeftBranchVals(root.right));
};
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var getRightBranchVals = function(root) {
    if (root === null) {
        return [null];
    }
    
    return [root.val].concat(getRightBranchVals(root.right), getRightBranchVals(root.left));
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricRecursive = function(root) {
    var leftBranchVals = getLeftBranchVals(root.left);
    var rightBranchVals = getRightBranchVals(root.right);

    return JSON.stringify(leftBranchVals) === JSON.stringify(rightBranchVals);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricIterative = function(root) {
    
};