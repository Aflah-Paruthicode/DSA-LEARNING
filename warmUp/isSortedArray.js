function isSortedArray (arr) {
    for(let i = 1;i<arr.length;i++) {
        if(arr[i-1] > arr[i]) {
            return false;
        }
    }
    return true
}

console.log(isSortedArray([1,22,3,34]))