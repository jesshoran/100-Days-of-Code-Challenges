//builds up the sort by gradually creating a larger left half which is always sorted

//pick 2nd element in array
//compare 2nd to one before, swap if necessary
//continue to next element - if order not correct, iterate through sorted and fin corect place
//repeat til sorted

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
        console.log(arr);
    }
    return arr;
}

console.log(insertionSort([85,25,65,2]))