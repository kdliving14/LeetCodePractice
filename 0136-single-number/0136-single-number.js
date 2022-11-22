/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let counter = {}
    
    for (let i = 0; i < nums.length; i++) {
              
        if(counter[nums[i]]){
            counter[nums[i]] = "dup"
        }
        else{
            counter[nums[i]] = "not dup"
        }
    }
    
    console.log(counter)
    
    return Object.keys(counter).find(key => counter[key] === "not dup");
    
};