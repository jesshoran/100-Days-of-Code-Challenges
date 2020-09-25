const isAnagram = (st1, st2) => {
    const st1Arr = st1.split('');
    const str1Letters = {}
    for (x of st1Arr) {
        str1Letters[x] = str1Letters[x] + 1 || 1
    }
    const st2Arr = st2.split('');
    const str2Letters = {}
    for (x of st2Arr) {
        str2Letters[x] = str2Letters[x] + 1 || 1
    }
   if (str1Letters ==str2Letters) {
       console.log("It's an anagram")
   }else {
       console.log("It's false")
   }
}


console.log(isAnagram("rail safety", "fairy tales"))
