'use strict';

function maxProfit(arr) {
    let maxProfit = arr[1] - arr[0]
    let minPrice = arr[0];
    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] < minPrice) {
            minPrice = arr[i]
        }
        if (arr[i] - minPrice > maxProfit) {
            maxProfit = arr[i] - minPrice
        }
    }
    return maxProfit;
}

let sharePrices =  [128, 97, 121, 123, 98, 97, 105]

console.log(maxProfit(sharePrices));