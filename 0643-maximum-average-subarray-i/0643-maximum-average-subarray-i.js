/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = -Infinity,windowSum = 0;
    for(let i=0; i<k; i++){
        windowSum += nums[i];
    } 
    maxSum = windowSum;
    let left = 0;
    for(let right=k; right<nums.length; right++){
        windowSum = windowSum + nums[right]-nums[left];
        left++;
        maxSum = Math.max(maxSum,windowSum);
    }
    return maxSum/k;
};