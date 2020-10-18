
//check to see if expression is anagram (same letters), 

//remove spaces and make lowercase
//check each ketter (key, value) with a frequency counter
//compare the 2 words together


const isAnagram = (wordA, wordB) => {
    let hashMapA = createFrequencyCounter(wordA)
    let hashMapB = createFrequencyCounter(wordB)
    if (hashMapA != hashMapB) {
        return false
    } else {
        return true
    }
}


const createFrequencyCounter = (word) => {
    let newWord = word.
}

//want the output to be an object {"x: 3, "a": 5}
//have a string, need to remove values
//.replace, .toLowerCase
//Object.keys turn from array to objecty
//compare both of those outputs 