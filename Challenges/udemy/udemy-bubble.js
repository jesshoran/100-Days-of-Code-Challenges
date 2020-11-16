//not efficient version, O(N^2)

function bubble(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;  //*optimized version*
        //i accounts for how many left in the array to loop through
        for (let j = 0; j < i - 1; j++) {
            //j is the position
            // console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j + 1]) {
            //SWAP
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            noSwaps = false;  //*optimized version*
            }
        }
        if(noSwaps) break;  //*optimized version*
    }
    return arr
}

console.log(bubble([37, 45, 29, 8]))