/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    //return n;
    let sum1 = 0;
    let sum2 = 0;

    let a = n;
    let i = 1;

    while(a!==0){
        sum1 += i;
        i+=2;
        a--;
    }

    let b = n;
    let j = 2;

    while(b!==0){
        sum2 += j;
        j+=2;
        b--;
    }
    return Math.abs(sum1-sum2);
};