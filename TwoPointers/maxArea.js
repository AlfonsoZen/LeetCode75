/** 11. Container With Most Water
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let bottom = 0;
    let top = height.length - 1;
    let amount = 0;

    while( bottom < top ) {        
        base = top - bottom
        altura = height[bottom] < height[top] ? height[bottom] : height[top]
        area = base * altura

        if( area > amount ) {
            amount = area;
        }

        if( height[bottom] < height[top] ) {
            bottom++
        } else {
            top--;
        }
    }
    
    return amount;
};

maxArea([1,8,6,2,5,4,8,3,7]) // 49