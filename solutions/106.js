/**
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * 106. Construct Binary Tree from Inorder and Postorder Traversal (Medium)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var globalInorder = null;
var globalPostorder = null;
var currentPostorderIndex = 0;

/**
 * @param {number} inorderLeftBoundaryIndex
 * @param {number} inorderRightBoundaryIndex
 * @return {TreeNode}
 */
var buildNode = function(inorderLeftBoundaryIndex, inorderRightBoundaryIndex) {
    if (currentPostorderIndex < 0 || inorderLeftBoundaryIndex > inorderRightBoundaryIndex) {
        return null;
    }
    
    var node = new TreeNode(globalPostorder[currentPostorderIndex]);
    var currentInorderIndex = globalInorder.indexOf(globalPostorder[currentPostorderIndex]);
    currentPostorderIndex--;
    
    node.right = buildNode(currentInorderIndex+1, inorderRightBoundaryIndex);
    node.left = buildNode(inorderLeftBoundaryIndex, currentInorderIndex-1);
    
    return node;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (postorder.length === 0) {
        return null;
    }
    
    globalInorder = inorder;
    globalPostorder = postorder;
    currentPostorderIndex = postorder.length-1;
    
    return buildNode(0, inorder.length-1);
};