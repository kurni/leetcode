/**
 * https://leetcode.com/problems/number-of-islands/
 * 200. Number of Islands (Medium)
 */
const LAND = 1;
const WATER = 0;
const VISITED_LAND = 2;
const DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

var globalGrid = [];
var gridWidth = 0;
var gridHeight = 0;

var exploreLand = function(row, col) {
    var queue = [[row, col]];
    
    while (queue.length > 0) {
        var node = queue.shift();
        var currentRow = node[0];
        var currentCol = node[1];
        
        for (var i = 0; i < DIRECTIONS.length; i++) {
            var direction = DIRECTIONS[i];
            var newNodeRow = currentRow + direction[0];
            var newNodeCol = currentCol + direction[1];
            
            if (newNodeRow < 0 || newNodeRow >= gridWidth || newNodeCol < 0 || newNodeCol >= gridHeight
                || globalGrid[newNodeRow][newNodeCol] != LAND) {
                continue;
            }
            
            globalGrid[newNodeRow][newNodeCol] = VISITED_LAND;
            queue.push([newNodeRow, newNodeCol]);
        }
    }
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    gridWidth = grid.length;
    if (gridWidth == 0) return 0;
    gridHeight = grid[0].length;
    if (gridHeight == 0) return 0;
    
    var output = 0;
    globalGrid = grid;
    
    for (var row = 0; row < gridWidth; row++) {
        for (var col = 0; col < gridHeight; col++) {
            if (globalGrid[row][col] == LAND) {
                exploreLand(row, col);
                output++;
            }
        }
    }
    
    return output;
};