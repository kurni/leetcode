/**
 * https://leetcode.com/problems/walls-and-gates/
 * 286. Walls and Gates (Medium)
 */
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const WALL = -1;
    const GATE = 0;
    const EMPTY = Math.pow(2,31)-1;
    const DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    var m = rooms.length;
    if (m === 0) return;
    var n = rooms[0].length;
    if (n === 0) return;
    
    var queue = [];
    for (var row = 0; row < m; row++) {
        for (var col = 0; col < n; col++) {
            if (rooms[row][col] === GATE) {
                queue.push([row, col]);
            }
        }
    }
    
    while (queue.length > 0) {
        var node = queue.shift();
        var row = node[0];
        var col = node[1];
        
        for (var i = 0; i < DIRECTIONS.length; i++) {
            var direction = DIRECTIONS[i];
            var newNodeRow = row + direction[0];
            var newNodeCol = col + direction[1];
            
            if (newNodeRow < 0 || newNodeRow >= m || newNodeCol < 0 || newNodeCol >= n
                || rooms[newNodeRow][newNodeCol] !== EMPTY) {
                continue;
            }
            
            rooms[newNodeRow][newNodeCol] = rooms[row][col] + 1;
            queue.push([newNodeRow, newNodeCol]);
        }
    }
};