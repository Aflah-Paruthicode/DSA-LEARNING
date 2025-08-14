function moveZerosToEnd(arr) {
    let zeros = [];
    let nums = [];
    for(let i = 0;i<arr.length;i++) {
        if(arr[i] == 0) {
            zeros.push(arr[i]);
        } else {
            nums.push(arr[i]);
        }
    }
    return [...nums,...zeros];
}

console.log(moveZerosToEnd([1,2,3,0,9,0,8,0]))