/*
 Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

 The update(i, val) function modifies nums by updating the element at index i to val.
 Example:
 Given nums = [1, 3, 5]

 sumRange(0, 2) -> 9
 update(1, 2)
 sumRange(0, 2) -> 8

 Note:
 The array is only modifiable by the update function.
 You may assume the number of calls to update and sumRange function is distributed evenly.

 */

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.calcualteSums(0);
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    this.nums[i] = val;
    this.calcualteSums(i);
};


/**
 * @param {number} i
 * @return {void}
 */
NumArray.prototype.calcualteSums = function(i){

    // get the previous memo value - or 0 if we're at the start
    var sum = i > 0 ? memo[i - 1] : 0;
    while(i < this.nums.length)
    {
        memo[i] = (sum += this.nums[i]);
        i++;
    }
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return i === 0 ? memo[j] : (memo[j] - memo[i - 1]);
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */
var memo = [];
var numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0,2)); // 9
numArray.update(1,2);
console.log(numArray.sumRange(0,2)); // 15


