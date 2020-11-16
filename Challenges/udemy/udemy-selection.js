//Similar to bubble 
//Instead of first placing larger values into sorted position, it places small values into sorted position

//make a variable to store the smallest value, which is the first element for time being
//compare this item to the next item in the array until you find a smaller number
//if smaller number found, make smaller number to be new "min" and continue on the array
//if min is not the value/index you began with, swap the 2
//repeat until array is sorted

// function selection (arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return arr
// }
// console.log(selection([37, 45, 29, 8]))


function selection (arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            console.log(i, j)
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        console.log("******")
        console.log(arr);
        console.log("swapping to: ");
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        console.log(arr);
        console.log("******")
    }
    return arr
}
console.log(selection([37, 45, 29, 8]))