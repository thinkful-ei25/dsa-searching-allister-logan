'use strict';

export function linearSearch(searchTerm, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchTerm) {
            return i + 1;
        }
    }
    return -1;
}

export function binarySearch(searchTerm, arr, start = 0, end = arr.length - 1, counter = 0) {
    if (start > end) {
        counter++;
        return -1;
    }
    let middle = Math.floor((start + end) / 2);
    // console.log('start', start);
    // console.log('end', end);
    // console.log(counter);
    if (arr[middle] === searchTerm) {
        counter++;
        return `Found in ${counter}`;
    }
    else if (arr[middle] < searchTerm) {
        counter++;
        return binarySearch(searchTerm, arr, middle + 1, end, counter);
    }
    else if (arr[middle] > searchTerm) {
        counter++;
        return binarySearch(searchTerm, arr, start, middle - 1, counter);
    }
}

// console.log(binarySearch(89, [25, 30, 32, 42, 51, 70, 72, 89]));

