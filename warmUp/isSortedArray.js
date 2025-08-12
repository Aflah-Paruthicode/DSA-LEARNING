function isSortedArr (arr) {
    if(arr.length < 2) return 'Need minimum two elements to work this algorthim';
    let isInc = arr[0] < arr[1] ? true : false;
    let seq = isInc ? arr[1]-arr[0] : arr[0]-arr[1];
    let count = 0;
    
    for(let i = 0;i<arr.length;i++) {
        if(arr[i+1] == arr[i]+seq || arr[i+1] == arr[i]-seq) {
            count++;
        }
    }
    return count == arr.length-1 ? true : false;
}

console.log(isSortedArr([5,4,3,2,1]))
console.log(isSortedArr([1,2,3,4,5]))
console.log(isSortedArr([1,3,5,7]))
console.log(isSortedArr([]))