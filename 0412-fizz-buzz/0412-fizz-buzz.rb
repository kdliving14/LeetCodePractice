# @param {Integer} n
# @return {String[]}
def fizz_buzz(n)
    
    result = []
    varr = 1
    
    until varr === n + 1
        if ((varr%3 === 0) and (varr%5 === 0))
            result<<"FizzBuzz"
        elsif varr%5 === 0
            result<<"Buzz"
        elsif varr%3 === 0
            result<<"Fizz"
        else
            result<<varr.to_s
        end
        
        varr+=1
            
    end
    
    result
end