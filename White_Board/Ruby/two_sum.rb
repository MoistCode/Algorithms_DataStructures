def two_sum(nums, target)
    hsh = {}
    
    nums.each_with_index do |el, idx|
        complement = target - el
        if hsh[complement]
            return [hsh[complement], idx]
        else 
            hsh[el] = idx
        end
    end
    
    raise 'No match'
end