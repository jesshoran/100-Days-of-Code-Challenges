//trying this myself without looking at the other :) 

//check to see if expression is anagram (same letters), 

//remove spaces and make lowercase
//check each ketter (key, value) with a frequency counter
//compare the 2 words together


const isAnagram = (wordA, wordB) => {
    let hashMapA = createFrequencyCounter(wordA);
    let hashMapB = createFrequencyCounter(wordB);
    
//   if(Object.keys(hashMapA).length !== Object.keys(hashMapB).length)
//   {return false;
//      }
  for(let key in hashMapA) {
    if (hashMapA[key] !== hashMapB[key]){
      return false
    }
  }
  return true;
}

const createFrequencyCounter = (word) => {
    let frequencyCounter = {}
    let newWord = word.replace(/[^\w]/g, "").toLowerCase();
    for (char of newWord) {
        frequencyCounter[char] = frequencyCounter[char] + 1 || 1
    }
    return frequencyCounter
}

console.log(isAnagram("pumpkins", "orchids"))
console.log(isAnagram("apple", "paple"))

//want the output to be an object {"x: 3, "a": 5}
//have a string, need to remove values
//.replace, .toLowerCase
//Object.keys turn from array to objecty
//compare both of those outputs 

//Apple pie = remove space, lower, 
//applepie