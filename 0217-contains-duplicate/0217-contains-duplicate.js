/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map()
    for(let num of nums){
        map.set(num,(map.get(num)||0)+1);
    }
    for(let [key,val] of map){
        if(val>=2){
            return true;
        }
    }
    return false;
};