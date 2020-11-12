function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end)/2);
    console.log(start, middle, end);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
        }
        if (arr[middle] === elem) {
            return middle
    }
    return -1
}

console.log(binarySearch([2,5,6,9,13,15,28], 45))