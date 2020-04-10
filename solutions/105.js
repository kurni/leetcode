/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 105. Construct Binary Tree from Preorder and Inorder Traversal (Medium)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var globalPreorder = null;
var globalInorder = null;
var currentPreorderIndex = 0;

/**
 * @param {number} inorderLeftBoundaryIndex
 * @param {number} inorderRightBoundaryIndex
 * @return {TreeNode}
 */
var buildNode = function(inorderLeftBoundaryIndex, inorderRightBoundaryIndex) {
    if (currentPreorderIndex >= globalPreorder.length || inorderLeftBoundaryIndex > inorderRightBoundaryIndex) {
        return null;
    }
    
    var node = new TreeNode(globalPreorder[currentPreorderIndex]);
    var currentInorderIndex = globalInorder.indexOf(globalPreorder[currentPreorderIndex]);
    currentPreorderIndex++;
    
    node.left = buildNode(inorderLeftBoundaryIndex, currentInorderIndex-1);
    node.right = buildNode(currentInorderIndex+1, inorderRightBoundaryIndex);
    
    return node;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    
    globalPreorder = preorder;
    globalInorder = inorder;
    currentPreorderIndex = 0;
    
    return buildNode(0, inorder.length-1);
};