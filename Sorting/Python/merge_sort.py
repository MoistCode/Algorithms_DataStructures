def merge(arr, left_idx, mid_idx, right_idx ):
    n1 = mid_idx - left_idx + 1
    n2 = right_idx - mid_idx 

    leftTempArr = [0] * (n1)
    rightTempArr = [0] * (n2)

    for i in range(0, n1):
        leftTempArr[i] = arr[left_idx + i]

    for j in range(0, n2):
        rightTempArr[j] = arr[mid_idx + 1 + j]

    i = 0
    j = 0
    k = left_idx

    while i < n1 and j < n2:
        if leftTempArr[i] <= rightTempArr[j]:
            arr[k] = leftTempArr[i]
            i += 1
        else:
            arr[k] = rightTempArr[j]
            j += 1
        k += 1

    while i < n1:
        arr[k] = leftTempArr[i]
        i += 1
        k += 1 
    
    while j < n2:
        arr[k] = rightTempArr[j] 
        j += 1 
        k += 1
        
def mergeSort(arr, left_idx, right_idx):
    if left_idx < right_idx:
        mid_idx = (left_idx + (right_idx - 1)) / 2

        mergeSort(arr, left_idx, mid_idx)
        mergeSort(arr, mid_idx + 1, right_idx)
        merge(arr, left_idx, mid_idx, right_idx)

arr = [12, 11, 13, 5, 6, 7] 
left_idx = 0
right_idx = len(arr) - 1

mergeSort(arr, left_idx, right_idx)
print(arr)

