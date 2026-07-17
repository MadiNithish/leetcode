/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
   // Because once i * i becomes greater than num, there's no point continuing.
    // for(let i = 1; i*i<=num; i++){
    //     if(i*i===num){
    //         return true;
    //     }
    // }
    // return false;
    let left = 0;
    let right = num;

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        let square = mid*mid;

        if(square===num){
            return true;
        }else if(square<num){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return false;
};