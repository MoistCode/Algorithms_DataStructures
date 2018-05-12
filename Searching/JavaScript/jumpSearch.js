const jumpSearch = (arr, val, arrLength) => {
    let step = parseInt(Math.sqrt(arrLength));
    let prev = 0;

    while(arr[Math.min(arrLength, step)] < val) {
        prev = step;
        step += parseInt(Math.sqrt(arrLength));

        if (prev >= arrLength) {
            return -1;
        }
    }

    while(arr[prev] < val) {
        prev += 1;

        if (prev == Math.min(step, arrLength)) {
            return -1
        }
    }

    if (arr[prev] == val) {
        return prev;
    }
};
arr = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ];

console.log(jumpSearch(arr, 55, arr.length));