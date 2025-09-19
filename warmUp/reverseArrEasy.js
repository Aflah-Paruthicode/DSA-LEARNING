let arr = [1,2,3,4,5,6]

function reverseArr (ar) {
    let nArr = []
    for(let i = ar.length-1;i>=0;i--) {
        nArr.push(ar[i])
    }
    return nArr;
}

console.log(reverseArr(arr))