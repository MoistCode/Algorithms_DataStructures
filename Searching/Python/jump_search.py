import math 

def jumpsearch(arr, val, arrLength):
    step = math.sqrt(arrLength)

    prev = 0
    while arr[int(min(step, arrLength))] < val:
        prev = step 
        step += math.sqrt(arrLength)
        if prev >= arrLength:
            return -1 

    while arr[int(prev)] < val:
        prev += 1

        if prev == min(step, arrLength):
            return -1

    if arr[int(prev)] == val:
        return int(prev)

    return -1

arr = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ]
print(jumpsearch(arr, 55, len(arr)))