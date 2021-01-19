//Frequency counter patterns - // Write a function called same which accepts 2 arrays. 
//The function should return true if every value in the array has it's corresponding value squared in the second array. 
//The frequency of values must be the same.

function same(arr1, arr2) {
    //check to see if they're equal, if not we're done
    if (arr1.length !== arr2.length) {
        return false
    } 
    //see if the square of arr1[i] is in the second one, then splice it out and keep going through the loop
    //indexOf to see if it's in there (if it equals -1, it's not in there, so we know it's false)
    for (let i = 0; i < arr1.length; i++) {
       let correctIndex = arr2.indexOf(arr1[i] ** 2)
       if (correctIndex === -1) {
           return false
       } arr2.splice(correctIndex,1)
    } return true
}

const test1 = [1, 2, 3, 4]
const test2 = [16, 4, 9, 1]

console.log(same(test1, test2))
