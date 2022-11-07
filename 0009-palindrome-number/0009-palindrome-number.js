/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var string = String(x)
    var arr = string.split("")
    var revarr = arr.reverse()
    var revstring = revarr.join("")
    
    if (string === revstring){
        return true;
    }else{
        return false;
    }
};