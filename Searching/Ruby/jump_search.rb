def jump_search(arr, val, arr_length)
    step = Math.sqrt(arr_length).to_i
    prev = 0

    while arr[[step, arr_length].min] < val
        prev = step 
        step += Math.sqrt(arr_length).to_i
        if prev >= arr_length 
            return -1
        end
    end

    while arr[prev] < val 
        prev += 1 

        if prev == [step, arr_length].min 
            return -1
        end
    end

    if arr[prev] == val 
        return prev
    end

    return -1
end

arr = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 
    34, 55, 89, 144, 233, 377, 610 ]

p jump_search(arr, 55, arr.length)