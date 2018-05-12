const binarySearch = (arr, val) => {
    let startIdx = 0;
    let endIdx = arr.length;
    let currentIdx = Math.round(endIdx / 2);

    while (startIdx != endIdx) {
        if(arr[currentIdx] == val) {
            return currentIdx;
        } else if(arr[currentIdx] < val) {
            startIdx = currentIdx + 1;
            currentIdx = Math.round((endIdx - startIdx) / 2) + startIdx;
        } else if(arr[currentIdx] > val) {
            endIdx = currentIdx - 1;
            currentIdx = Math.round(endIdx / 2);
        }
    }
    return -1
};

let arr = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ];
console.log(binarySearch(arr, 55));