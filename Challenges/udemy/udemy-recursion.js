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
