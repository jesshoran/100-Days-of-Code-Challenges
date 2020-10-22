// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let array = str.toLowerCase().split(' ')
    console.log(array)
    //one array with separate strings per word
    let newArray = []
    //new array to put updated string into
    console.log(newArray)
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    //push array at position 0 ('the'), character at 0 is the t, set it to uppercase. Add array position 0, starting at the "he", output is "The"
    return newArray.join(' ')
}


console.log(capitalize("the orange went to the banana"))

module.exports = capitalize;