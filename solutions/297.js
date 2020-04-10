/**
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * 297. Serialize and Deserialize Binary Tree (Hard)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var serializeOutput = [];

var traverseTree = function(root) {
    if (root === null) {
        serializeOutput.push(null);
        return true;
    }
    
    serializeOutput.push(root.val);
    traverseTree(root.left);
    traverseTree(root.right);
    
    return true;
};

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    serializeOutput = [];
    traverseTree(root);
    
    return JSON.stringify(serializeOutput);
};

var buildTree = function(data) {
    var currentData = data.shift();
    if (currentData === null) {
        return null;
    }
    
    var node = new TreeNode(currentData);
    node.left = buildTree(data);
    node.right = buildTree(data);
    
    return node;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var parsedData = JSON.parse(data);
    
    return buildTree(parsedData);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */