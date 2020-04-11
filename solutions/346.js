/**
 * https://leetcode.com/problems/moving-average-from-data-stream/
 * 346. Moving Average from Data Stream (Easy)
 */
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = [];
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.queue.length >= this.size) this.queue.shift();
    this.queue.push(val);
    
    var sum = 0;
    for (var i = 0; i < this.queue.length; i++) {
        sum += this.queue[i];
    }
    
    return sum/this.queue.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */