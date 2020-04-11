/**
 * https://leetcode.com/problems/design-circular-queue/
 * 622. Design Circular Queue (Medium)
 */
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.array = [];
    this.headIndex = 0;
    this.tailIndex = 0;
    this.currentSize = 0;
    this.maxSize = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    
    this.currentSize++;
    if (this.currentSize > 1) this.tailIndex++;
    if (this.tailIndex >= this.maxSize) this.tailIndex = 0;
    this.array[this.tailIndex] = value;
    
    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    
    this.currentSize--;
    this.array[this.headIndex] = undefined;
    if(this.currentSize > 0) this.headIndex++;
    if (this.headIndex >= this.maxSize) this.headIndex = 0;
    
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    var output = this.array[this.headIndex];
    if (output === undefined) output = -1;
    return output;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    var output = this.array[this.tailIndex];
    if (output === undefined) output = -1;
    return output;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.currentSize <= 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.currentSize >= this.maxSize;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */