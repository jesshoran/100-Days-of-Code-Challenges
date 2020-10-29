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