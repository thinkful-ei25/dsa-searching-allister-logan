
function eggDropping(height) {
    let floors = []
    let n = 1;
    while (!(n * ( n + 1 ) / 2 >= height)) {
        n++
    }
    let worstCase = n
    while (n <= height) {
        floors.push(n)
        n = n + (worstCase-1)
        worstCase--
    }
    
    if (!(floors[floors.length-1] === height)) {
        floors.push(height)
    }

    return floors;
}

// input: height of tower
// output: array of floors
// input: 100
// output: 14, 27, 39, 50, 60, 69, 77, 84, 90, 95, 99, 100



console.log(eggDropping(25))
 