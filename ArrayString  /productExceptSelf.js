/** 238. Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefProducts = 1
    let posProducts = 1
    let posProductsArr = []
    let answer = []

    answer.push(1)
    for( let i = 1; i < nums.length; i++ ) {
        prefProducts *= nums[i - 1];
        answer.push(prefProducts)
    }

    posProductsArr.push(1)
    for( let i = nums.length - 2; i >= 0; i-- ) {
        posProducts *= nums[i + 1];
        posProductsArr.push(posProducts)
    }

    let n = nums.length;
    for( let i in answer ) {
        answer[i] *= posProductsArr[n - 1 - i]
    }
        
    return answer
};

productExceptSelf([1, 2, 3, 4])