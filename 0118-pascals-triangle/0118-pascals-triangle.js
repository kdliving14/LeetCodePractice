/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let result=[];
    
    
    for(let row=1; row <= numRows; row++){
        
        let placeholder = [];
 
        for(let col=0; col<row; col++)
        {
            if(col===0 || col===row-1){
                placeholder.push(1)
            }
            else
            {
                placeholder.push(result[row-2][col]+result[row-2][col-1])
            }
        }
        result.push(placeholder)
    }
    return result;
};