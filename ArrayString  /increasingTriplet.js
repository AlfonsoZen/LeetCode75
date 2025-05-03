/** 334. Increasing Triplet Subsequence
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 
Example 1:
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

Example 2:
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

Example 3:
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let iNum = Number.POSITIVE_INFINITY
    let jNum = Number.POSITIVE_INFINITY
    
    for( let i = 0; i < nums.length; i ++ ) {
        let num = nums[i]
        
        if( iNum >= num ) {
            iNum = num
        } else if( jNum >= num ) {
            jNum = num
        } else {
            return true
        }
    }

    return false
    
}; 

increasingTriplet([1,5,0,4,1,3])
// [2,1,5,0,4,6] // true
// [1,5,0,4,1,3] // true
// [20,100,10,12,5,13] // true
// [1,5,0,4,1,3] // true