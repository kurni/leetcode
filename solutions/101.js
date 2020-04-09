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

    // return isSymmetricRecursive(root);
    return isSymmetricIterative(root);
};

/***** START RECURSIVE SOLUTION *****/

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

/***** END RECURSIVE SOLUTION *****/

/***** START ITERATIVE SOLUTION *****/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricIterative = function(root) {
    var leftBranchVals = [];
    var rightBranchVals = [];
    var stack = [];
    var currentNode = null;
    
    // process left branch
    stack.push(root.left);
    while (stack.length > 0) {
        currentNode = stack.pop();
        if (currentNode !== null) {
            leftBranchVals.push(currentNode.val);
            stack.push(currentNode.right);
            stack.push(currentNode.left);
        } else {
            leftBranchVals.push(null);
        }
    }
    
    // process right branch
    stack.push(root.right);
    while (stack.length > 0) {
        currentNode = stack.pop();
        if (currentNode !== null) {
            rightBranchVals.push(currentNode.val);
            stack.push(currentNode.left);
            stack.push(currentNode.right);
        } else {
            rightBranchVals.push(null);
        }
    }
    
    return JSON.stringify(leftBranchVals) === JSON.stringify(rightBranchVals);
};

/***** END ITERATIVE SOLUTION *****/