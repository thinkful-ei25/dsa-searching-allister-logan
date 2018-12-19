'use strict';

export function linearSearch(searchTerm, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchTerm) {
            return i + 1;
        }
    }
    return -1;
}

