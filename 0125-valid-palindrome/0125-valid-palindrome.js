/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g,"")
    // let original = s;
    // let reverse = "";
    // for(let i=s.length-1; i>=0; i--){
    //     reverse +=s[i];
    // }
    // if(original===reverse){
    //     return true;
    // }else{
    //     return false;
    // }

    let left = 0;
    let right = s.length-1;

    while(left<right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};