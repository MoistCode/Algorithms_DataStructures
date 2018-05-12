import math 

def jumpsearch(arr, val, arrLength):

    step = math.sqrt(arrLength)

    prev = 0
    while arr[int(min(step, arrLength)-1)] < val:
        prev = step 
        step += math.sqrt(arrLength)
        if prev >= arrLength:
            return -1 

    while arr[int(prev)] < x:
        prev += 1

        if prev == min(step, arrLength):
            return -1

    if arr[int(prev)] == arrLength:
        return prev 

    return -1
        