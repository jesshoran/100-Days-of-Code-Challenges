// sameFrequency
// write a function that given 2 positive integers, find out if the 2 numbers have the same frequency of digits

//must be O(N)

//take in num1, num2
//use frequency counter to check if they are the same

function sameFrequency(num1, num2) {
    let stringNum1 = num1.toString();
    let stringNum2 = num2.toString();
    if (stringNum1.length !== stringNum2.length) {
        return false
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let num in stringNum1) {
        frequencyCounter1[num] = frequencyCounter1[num] + 1 || 1;
    }
    for (let num in stringNum2) {
        frequencyCounter2[num] = frequencyCounter2[num] + 1 || 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        } if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false
        }
    }
    return true
}

console.log(sameFrequency(23456, 65432))
console.log(sameFrequency(49264, 986428))