function largestSumOfArr (arr) {
    let largest = -Infinity;
    let secondLargest;
    for(let i = 0;i<arr.length;i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(secondLargest < arr[i]) {
            secondLargest = arr[i];
        }
    }
    return largest + secondLargest;
}

console.log(largestSumOfArr([1,,22,3,4,10,5,20,30]))