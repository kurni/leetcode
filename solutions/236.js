/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * 236. Lowest Common Ancestor of a Binary Tree (Medium)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var output = null;

/**
 * @param {TreeNode} node
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var traverseTree = function(node, p, q) {
    if (node === null) {
        return false;
    }
    
    var isPorQinLeftBranch = traverseTree(node.left, p, q);
    var isPorQinRightBranch = traverseTree(node.right, p, q);
    
    var isPorQinCurrentNode = false;
    if (node.val === p.val || node.val === q.val) {
        isPorQinCurrentNode = true;
    }
    
    if (isPorQinLeftBranch || isPorQinRightBranch || isPorQinCurrentNode) {
        if ((isPorQinLeftBranch && isPorQinRightBranch)
            || ((isPorQinLeftBranch || isPorQinRightBranch) && isPorQinCurrentNode)) {
            output = node;
        }
        
        return true;
    }
    
    return false; 
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    traverseTree(root, p, q);
    
    return output;
};