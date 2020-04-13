/**
 * https://leetcode.com/problems/perfect-squares/
 * 279. Perfect Squares (Medium)
 */
var squareNums = [];

var canBeDividedBy = function(n, count) {
    if (count == 1) {
        return squareNums.indexOf(n) != -1;
    }
    
    for (var i = 1; i < squareNums.length; i++) {
        if (canBeDividedBy(n-squareNums[i], count-1)) {
            return true;
        }
    }
    
    return false;
}

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if (n == 0) return 0;
    
    squareNums = [];
    for (var i = 1; i * i <= n; i++) {
        squareNums[i] = i * i;
    }
    
    var count = 1;
    for (; count <= n; count++) {
        if (canBeDividedBy(n, count)) {
            return count;
        }
    }
    
    return count;
};