//write a function that accepts an array and a value
//loop through array and chek if the current array element is equal to the value
//if yes, return index
//if no, return -1

function linear(arr, value) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === value) return i;

    }
    return -1
}

console.log(linear([14, 56, 32], 56))