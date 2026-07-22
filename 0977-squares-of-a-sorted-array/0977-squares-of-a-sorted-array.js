/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // let squares = []
    // for(let i=0; i<nums.length; i++){
    //     squares.push(nums[i]*nums[i]);
    // }
    // squares.sort((a,b)=>a-b)
    // return squares;

    let result = []

    let left = 0;
    let right = nums.length-1;
    let index = nums.length-1;

    while(left<=right){
        const leftSquare = nums[left]*nums[left];
        const rightSquare = nums[right]*nums[right];

        if(leftSquare>rightSquare){
            result[index] = leftSquare;
            left++;
        }else{
            result[index] = rightSquare;
            right--;
        }
        index--;
    }
    return result;
};