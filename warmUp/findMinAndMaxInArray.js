function findMinAndMaxInArr (arr) {
    let min = Infinity;
    let max = -Infinity;
    let i = 0;
    while(i<arr.length) {
        min = min > arr[i] ? arr[i] : min;
        max = max < arr[i] ? arr[i] : max;
        i++;
    }
    return [min,max];
}

console.log(findMinAndMaxInArr([1,2,3,4,5,7,8]))