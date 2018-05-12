def jump_search(arr, val, arrLength)
    step = Math.sqrt(arrLength)
    prev = 0

    while arr[(step, arrLength).min] < val
        prev = step 
        step += Math.sqrt(arrLength)
        if prev >= arrLength 
            return -1
        end
    end

    while arr[prev] < val 
        prev += 1 

        if prev == (step, arrLength).min 
            return -1
        end
    end

    if arr[prev] == val 
        return prev
    end

    return -1
end