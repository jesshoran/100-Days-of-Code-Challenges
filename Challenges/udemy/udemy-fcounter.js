//FROM MASTERCLASS//

// Write a function called same which accepts 2 arrays. 
//The function should return true if every value in the array has it's corresponding value squared in the second array. 
//The frequency of values must be the same.

function same(arr1, arr2) {
    //if not the same length, we know it's false
    if(arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        //correctIndex to see if each element (i) in arr1 is in arr2
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //for each element, if indexOf returns -1, if value searched isn't there 
        if (correctIndex === -1) {
            return false
        } else
        console.log(arr2)
        arr2.splice(correctIndex, 1)
    }
    return true
}

let test1 = [1, 2, 3, 2]
let test2 = [9, 1, 4, 4]

console.log(same(test1, test2))


//REFACTOR
//use frequency counter to check each value 

const sameSame = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    } 
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let value of arr1) {
        frequencyCounter1[value] = frequencyCounter1[value] +1 || 1;
    }
    for (let value of arr2) {
        frequencyCounter2[value] = frequencyCounter2[value] +1 || 1;
    }
    //check and see if the values in freq counter 2 are squared the first
    for(let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        } if (frequencyCounter2[key **2] !== frequencyCounter1[key]) {
            return false
        }                      
    }
    return true
}

console.log(sameSame([1,2,3,2,5], [9,1,4,4,11]))