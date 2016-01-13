/*

 Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

 Example:
 Given nums = [-2, 0, 3, -5, 2, -1]

 sumRange(0, 2) -> 1
 sumRange(2, 5) -> -1
 sumRange(0, 5) -> -3

 Note:
 You may assume that the array does not change.
 There are many calls to sumRange function.

 */


/**
 * @constructor
 * @param {number[]} nums
 */
var memo = [];
var NumArray = function(nums) {
    this.nums = nums;

    //work out cumulative total
    var sum = 0;
    for(var i = 0; i < this.nums.length; i++)
    {
        memo[i] = (sum += nums[i]);
    }

};

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
 * numArray.sumRange(0, 2);
 */

    /*

     sumRange(0, 2) -> 1
     sumRange(2, 5) -> -1
     sumRange(0, 5) -> -3

     nums = [-2, 0, 3, -5, 2, -1];
     memo = [-2, -2, 1, -4, -2, -3]

     */

//Test
var nums = [-2, 0, 3, -5, 2, -1];
var numArray = new NumArray(nums);
console.log('end : ' + numArray.sumRange(0, 5));