/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
// const sorteds = s.split("").sort().join();
// const sortedt = t.split("").sort().join();

// if(sorteds===sortedt){
//     console.log("true");
// }else{
//     console.log("false");
// }

if(s.length !== t.length){
    return false;
}

const map1 = new Map();
const map2 = new Map();

for(let ch of s){
    if(map1.has(ch)){
        map1.set(ch,map1.get(ch)+1)
    }else{
        map1.set(ch,1)
    }
}

for(let ch of t){
    if(map2.has(ch)){
        map2.set(ch,map2.get(ch)+1)
    }else{
        map2.set(ch,1)
    }
}

for(let [key,value] of map1){
    if(!map2.has(key)){
        return false;
    }

    if (map2.get(key)!==value){
        return false
    }
        
    
}
return true;
};