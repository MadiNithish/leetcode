/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    let set = new Set(nums)
    for(let i=0; i<=nums.length; i++){
        if(!set.has(i)){
            return i;
        }
    }
};