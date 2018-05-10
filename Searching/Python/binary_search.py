# Given a sorted array 
# Find element 'x' 

# Binary Search 
# Divide search interval in half
# Begin with the midpoint 
# If the value is less than 'x' 
    # Search right 
    # No need to keep track of index 
# If the value is greater than 'x' 
    # Search left 
    # Index is equal index of midpoint +  
# If the value is equal to 'x' 
    # Return index 

# The second and third argument represent the first and last index 
def binarySearch(arr, 1, r, x):
    
    if r >= 1:
        
        mid = 1 + (r - 1) / 2

        if arr[mid] == x:
            return mid 
        
        elif arr[mid] > x: 
            return binarySearch(arr, 1, mid + 1, x) 
        
        else: 
            return binarySearch(arr, mid + 1, r, x)

    else:
        return -1