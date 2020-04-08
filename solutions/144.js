/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 * 144. Binary Tree Preorder Traversal (Medium)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Definition for a node property state (i.e. if the property in question has been processed).
 */
function NodePropertyState() {
    this.val = this.left = this.right = false;
}

/**
 * @param {TreeNode} node
 * @return {boolean}
 */
var isValidNode = function(node) {
    return (node !== null && typeof node !== "undefined" && typeof node.val === "number");
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];
    
    let currentNode = root;
    let currentNodePropertyState = new NodePropertyState();
    let processedNodeStack = [];
    let processedNodePropertyStateStack = [];
    
    while (true) {
        if (isValidNode(currentNode)) {
            // process current node
            if (!currentNodePropertyState.val) {
                result.push(currentNode.val);
                currentNodePropertyState.val = true;
            }
            
            if (isValidNode(currentNode.left) && !currentNodePropertyState.left) {
                // traverse to the left node
                currentNodePropertyState.left = true;
                processedNodeStack.push(currentNode);
                processedNodePropertyStateStack.push(currentNodePropertyState);
                
                currentNode = currentNode.left;
                currentNodePropertyState = new NodePropertyState();
            } else if (isValidNode(currentNode.right) && !currentNodePropertyState.right) {
                // traverse to the right node
                currentNodePropertyState.right = true;
                processedNodeStack.push(currentNode);
                processedNodePropertyStateStack.push(currentNodePropertyState);
                
                currentNode = currentNode.right;
                currentNodePropertyState = new NodePropertyState();
            } else {
                // traverse back to the parent node
                currentNode = processedNodeStack.pop();
                currentNodePropertyState = processedNodePropertyStateStack.pop();
            }
        } else {
            break;
        }
    }
    
    return result;
};