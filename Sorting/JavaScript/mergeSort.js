'use strict';

const minToMax = (x, y) => {
    if(x < y) {
        return -1;
    } else if(x > y) {
        return 1;
    } else if (y == x) {
        return 0;
    }
};

const maxToMin = (x, y) => {
    if(x < y) {
        return 1;
    } else if (y > x) {
        return -1;
    } else {
        return 0;
    }
};

const mergeSortHelper = (arr1, arr2, cb) => {
    let sortedArray = [];

    while (arr1.length != 0 && arr2.length != 0) {
        let n = cb(arr1[0], arr2[0]);
        if(n === -1) {
            sortedArray.push(arr1.shift());
        } else if (n === 1) {
            sortedArray.push(arr2.shift());
        } else {
            sortedArray.push(arr1.shift());
            sortedArray.push(arr2.shift());
        }
    }
    
    console.log(arr1, arr2);
    if(arr1.length === 0) {
        sortedArray = sortedArray.concat(arr2);
    } else {
        sortedArray = sortedArray.concat(arr1);
    }
    console.log(sortedArray)
    return sortedArray;
};

const mergeSort = (arr, cb = minToMax) => {
    if(arr.length == 0 || arr.length == 1) {
        return arr;
    }
    let middleIndex = parseInt(arr.length / 2)
    let leftHalf = arr.slice(0, middleIndex);
    let rightHalf = arr.slice(middleIndex, arr.length)

    let left = mergeSort(leftHalf, cb);
    let right = mergeSort(rightHalf, cb);

    return mergeSortHelper(left, right, cb)
};


let passedArr = [12, 11, 13, 5, 6, 7];
console.log(mergeSort(passedArr));