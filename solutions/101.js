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

    // return isSymmetricRecursive(root, root);
    return isSymmetricIterative(root);
};

/***** START RECURSIVE SOLUTION *****/

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var isSymmetricRecursive = function(t1, t2) {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    
    return (t1.val === t2.val)
        && isSymmetricRecursive(t1.left, t2.right)
        && isSymmetricRecursive(t1.right, t2.left);
};

/***** END RECURSIVE SOLUTION *****/

/***** START ITERATIVE SOLUTION *****/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricIterative = function(root) {
    var stack = [];
    var t1 = null;
    var t2 = null;
    
    stack.push(root);
    stack.push(root);
    
    while (stack.length > 0) {
        t1 = stack.pop();
        t2 = stack.pop();
        
        if (t1 === null && t2 === null) continue;
        if (t1 === null || t2 === null) return false;
        if (t1.val !== t2.val) return false;
        
        stack.push(t1.left);
        stack.push(t2.right);
        stack.push(t1.right);
        stack.push(t2.left);
    }
    
    return true;
};

/***** END ITERATIVE SOLUTION *****/