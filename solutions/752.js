/**
 * https://leetcode.com/problems/open-the-lock/
 * 752. Open the Lock (Medium)
 */
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    var deadendsHash = [];
    for (var i = 0; i < deadends.length; i++) {
        deadendsHash[deadends[i]] = "";
    }
    
    var queue = [];
    var lockSeenHash = [];
    
    queue.push("0000");
    lockSeenHash["0000"] = "";
    queue.push(null);
    
    var level = 0;
    while (queue.length > 0) {
        var currentLock = queue.shift();
        
        if (currentLock == null) {
            level++;
            if (queue[0] != null) queue.push(null);
        } else if (currentLock == target) {
            return level;
        } else if (deadendsHash[currentLock] == undefined) {
            for (var i = 0; i < 4; i++) {
                for (var j = -1; j <= 1; j += 2) {
                    var y = (Number(currentLock.substr(i, 1)) + j + 10) % 10;
                    var newLock = currentLock.substr(0, i) + y + currentLock.substr(i+1);
                    if (lockSeenHash[newLock] == undefined) {
                        queue.push(newLock);
                        lockSeenHash[newLock] = "";
                    }
                }
            }       
        }
    }
    
    return -1;
};