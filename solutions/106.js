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
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    var nodes = [];
    var nodeLength = inorder.length;
    
    if (nodeLength === 0) {
        return null;
    }
    
    // instantiate nodes
    for (var i = 0; i < nodeLength; i++) {
        nodes[i] = new TreeNode(inorder[i]);
    }
    
    // find parent with left child node
    for (var i = 0; i < nodeLength-1; i++) {
        if (postorder.indexOf(inorder[i]) < postorder.indexOf(inorder[i+1])) {
            nodes[i+1].left = nodes[i];
        }
    }
    
    // find parent with right child node
    for (var i = 0; i < nodeLength-1; i++) {
        var childNodeIndex = inorder.indexOf(postorder[i]);
        var parentNodeIndex = inorder.indexOf(postorder[i+1]);
        if (parentNodeIndex < childNodeIndex) {
            nodes[parentNodeIndex].right = nodes[childNodeIndex];
        }
    }
    
    // find top parent
    var candidates = [];
    for (var i = 0; i < nodeLength; i++) {
        candidates.push(inorder[i]);
    }
    for (var i = 0; i < nodeLength; i++) {
        if (nodes[i].left !== null) {
            candidates = candidates.filter(x => x !== nodes[i].left.val);
        }
        if (nodes[i].right !== null) {
            candidates = candidates.filter(x => x !== nodes[i].right.val);
        }
    }
    
    return nodes[inorder.indexOf(candidates[0])];
};