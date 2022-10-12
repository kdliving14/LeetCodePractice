# @param {Integer[][]} accounts
# @return {Integer}
def maximum_wealth(accounts)
    
    acct_sum = [];
    
    accounts.map do |a|
        acct_sum << a.sum
    end
    
    acct_sum.max
end