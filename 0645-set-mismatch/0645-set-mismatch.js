/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let result = []
    let set = new Set();
    let duplicate = ""
    for(let i = 0; i<nums.length; i++){
        if(set.has(nums[i])){
            duplicate = nums[i]
            result.push(nums[i])
        }else{
            set.add(nums[i]);
        }
    }
    let missing = ""
    for(let i = 1; i<=nums.length; i++){
        if(!set.has(i)){
            missing = i;
            result.push(i);
            break;
        }
    }
    return result;
};
console.log(findErrorNums([1,2,2,4]));