# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
        hash ={}

    nums.each_with_index do |num, indx|
        
        diff = target - num 

        if !!hash[num]
            return[hash[num],indx]
        end

        hash[diff]=indx
    end
end