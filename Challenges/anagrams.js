// const isAnagram = (st1, st2) => {
//     const st1Arr = st1.split('');
//     const str1Letters = {}
//     for (x of st1Arr) {
//         str1Letters[x] = str1Letters[x] + 1 || 1
//     }
//     const st2Arr = st2.ssplit('');
//     const str2Letters = {}
//     for (x of st2Arr) {
//         str2Letters[x] = str2Letters[x] + 1 || 1
//     }
//    if (str1Letters ==str2Letters) {
//        console.log("It's an anagram")
//    }else {
//        console.log("It's false")
//    }
// }
// s

// console.log(isAnagram("rail safety", "fairy tales"))


const isAnagram = (strA, strB) => {
    const hashMapA = createFrequencyCounter(strA)
  const hashMapB = createFrequencyCounter(strB)
  
  if(Object.keys(hashMapA).length !== Object.keys(hashMapB).length)
  {return false;
     }
  for(let key in hashMapA) {
    if (hashMapA[key] !== hashMapB[key]){
      return false
    }
  }
  return true;
}

function createFrequencyCounter(str) {
  const frequencyCounter = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
    frequencyCounter[char] = frequencyCounter[char] + 1 || 1;
  }
  return frequencyCounter
}


const words = "Junk! ...Safety!"
createFrequencyCounter(words)

console.log(isAnagram('rail safety', 'fairy tales'))
console.log(isAnagram('joe', 'EOJ!!!!!!'))
console.log(isAnagram('what is up', 'hi there'))