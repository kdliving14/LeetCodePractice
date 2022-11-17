/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    arr = digits.join("")
    newnum = BigInt(arr)+BigInt(1)
    arr = String(newnum).split("")
    return arr
};