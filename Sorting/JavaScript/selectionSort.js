const selectionSort = (arr) => {
    let leftIndex = 0;
    let minIndex = 0;
    let startingIndex = 1;

    while (leftIndex !== arr.length - 1) {
        for(let i = leftIndex; i < arr.length; i++) {
            if(arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        temp1 = arr[leftIndex];
        arr[leftIndex] = arr[minIndex];
        arr[minIndex] = temp1;
        leftIndex += 1;
    };

    return arr;
};

arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr));