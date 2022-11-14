/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const result=[];

    let indexA = a.length-1;
    let indexB = b.length-1;

    let carry = 0

while (indexA>=0 || indexB>=0 || carry){
	
	const aValue = a[indexA] || 0
	const bValue = b[indexB] || 0

    let sum = parseInt(aValue)+ parseInt(bValue)+carry;
    
    if (sum > 1){
        carry = 1
        sum = sum % 2;
    }else{
        carry = 0;
    }
	indexA--;
	indexB--;
    result.push(sum);
}
    return result.reverse().join("");
};