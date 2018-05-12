def jump_search(arr, val, arrLength)
    step = Math.sqrt(arrLength).to_i
    prev = 0

    while arr[[step, arrLength].min] < val
        prev = step 
        step += Math.sqrt(arrLength).to_i
        if prev >= arrLength 
            return -1
        end
    end

    while arr[prev] < val 
        prev += 1 

        if prev == [step, arrLength].min 
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