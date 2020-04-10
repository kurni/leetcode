/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 * 116. Populating Next Right Pointers in Each Node (Medium)
 */
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {
        return root;
    }
    
    var currentNode = null;
    var queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        var queueLength = queue.length;
        
        for (var i = 0; i < queueLength; i++) {
            currentNode = queue.shift();
            
            if (i < queueLength-1) {
                currentNode.next = queue[0];
            }
            
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }
    
    return root;
};