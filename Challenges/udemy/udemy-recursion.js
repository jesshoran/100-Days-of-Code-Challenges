//base case - where recursion ends

//countdown function

function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
        //need return to stop, otherwise it will keep printing all done
    } 
    console.log(num);
    num --;
    countDown(num);

}
console.log(countDown(5))


function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num-1)
}

console.log(sumRange(3))

//not recursive
function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i --) {
        total *= i
    }
    return total
}

console.log(factorial(3))

//recursive

function factorial(num) {
    if (num === 1) return 1;
    return num + factorial(num - 1);
}

//HELPER

function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])