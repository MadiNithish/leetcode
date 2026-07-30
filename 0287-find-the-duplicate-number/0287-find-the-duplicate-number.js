/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // let left = 0;
    // let right = nums.length-1;

    // while(left<=right){
    //     let mid = Math.floor((left+right)/2);
    //     if(nums[mid])
    // }

    let set = new Set();
    for(let num of nums){
        if(set.has(num)){
            return num;
        }else{
            set.add(num);
        }
    }
};