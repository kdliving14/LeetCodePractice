/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let nums = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    
    let arr = s.split("");
    let total = 0;
    let i = 0;
    
    while (i<arr.length){
        const curr = nums[arr[i]]
        const next = nums[arr[i+1]]
        
        if (next > curr)
            {total += next - curr; i++}
        else
            {total += curr}
        
        // console.log("curr:", curr, "next:", next, "total:", total)
        
        i++;
    }
    return total;
    
};