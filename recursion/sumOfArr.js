

let arr = [5,4,3,2,1,10]

function sumOfArr (n) { 
    if(n == 0) return arr[n];
    
    return arr[n] + sumOfArr(n-1);
}

console.log(sumOfArr(arr.length-1))