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

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) {
        return JSON.stringify([]);
    }
    
    var output = [];
    var queue = [];
    
    output.push(root.val);
    queue.push(root);
    
    while (queue.length > 0) {
        var queueLength = queue.length;
        var outputForNextLevel = [];
        var validNodeCountInNextLevel = 0;
        
        for (var i = 0; i < queueLength; i++) {
            var currentNode = queue.shift();
            
            // process left child node
            if (currentNode.left !== null) {
                outputForNextLevel.push(currentNode.left.val);
                validNodeCountInNextLevel++;
            } else {
                outputForNextLevel.push(null);
                currentNode.left = new TreeNode(null);
            }
            queue.push(currentNode.left);
            
            // process right child node
            if (currentNode.right !== null) {
                outputForNextLevel.push(currentNode.right.val);
                validNodeCountInNextLevel++;
            } else {
                outputForNextLevel.push(null);
                currentNode.right = new TreeNode(null);
            }
            queue.push(currentNode.right);            
        }
        
        if (validNodeCountInNextLevel > 0) {
            output = output.concat(outputForNextLevel);
        } else {
            break;
        }
    }
    
    return JSON.stringify(output);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var parsedData = JSON.parse(data);
    if (parsedData.length === 0) {
        return null;
    }
    
    var output = new TreeNode(parsedData.shift());
    var currentLevelStack = [ output ];
    var nextLevelStack = [];
    
    while (parsedData.length > 0) {
        while (currentLevelStack.length > 0) {
            var currentNode = currentLevelStack.shift();
            var leftNodeVal = parsedData.shift();
            var rightNodeVal = parsedData.shift();
            
            if (currentNode !== null) {
                if (leftNodeVal !== null && leftNodeVal !== undefined) {
                    currentNode.left = new TreeNode(leftNodeVal);
                    nextLevelStack.push(currentNode.left);
                } else {
                    nextLevelStack.push(null);
                }
                if (rightNodeVal !== null && rightNodeVal !== undefined) {
                    currentNode.right = new TreeNode(rightNodeVal);
                    nextLevelStack.push(currentNode.right);
                } else {
                    nextLevelStack.push(null);
                }
            } else {
                nextLevelStack.push(null);
                nextLevelStack.push(null);
            }
        }
        
        while (nextLevelStack.length > 0) {
            currentLevelStack.push(nextLevelStack.shift());
        }
    }
    
    return output;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */