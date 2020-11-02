//write a function called sumZero which accepts a sorted array of integeters
//The function should find the first pair where the sum is zero
//Return an array that includes both values that sum to zero or undefined if a pair does not exist

//Not very efficient version

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j <arr.length; j++) {
            if (arr[i] + arr[j] ===0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))

//Now let's refactor

function sumZeroBetter(arr) {
    let left = 0;
    let right = arr.length -1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right --;
        } else {
            left ++;
        }
    }
}

console.log(sumZeroBetter([-4,-3,-2,-1,0,1,2,5,10]))

//Implement a function called countUniqueValues which accpets a sorted array and counts the unique values in the array
//there can be negative numbers in the array but it will always be sorted.


function countUniqueValues (arr) {
 let i = 0;
 for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j]
    }
    console.log(i, j)
 }
 return i + 1;
}

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]))