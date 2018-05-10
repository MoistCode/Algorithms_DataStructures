def permutations(arr)
    return [[]] if arr.empty? 

    perms = [] 

    arr.length.times do |i|
        el = arr[i] 
        reset = arr.take(i) + arr.drop(i + 1)
        new_perms = permutations(rest.map { |perm| perm.unshift(el) })
        perms.concat(new_perms)
    end

    perms
end


def permutations2(arr, first_idx = 0, last_idx = arr.length - 1) 
    if first_idx == last_idx 
        p arr.join('')
    else 
        (first_idx..last_idx + 1).each do |i|
            arr[first_idx], arr[i] = arr[i], arr[first_idx]
            permutations2(arr, first_idx + 1, last_idx)
            arr[first_idx], arr[i] = arr[i], arr[first_idx]
        end
    end
end

permutations2([1,2,3])
