const missingNumberInSequence = (array) => {
    let missingNArr = [];
    for(let i = 1;i<array.length;i++) {
        if(array[i] && array[i-1] && array[i-1] !== array[i]-1) missingNArr.push(array[i]-1);
    }
    return missingNArr;
}

let res = missingNumberInSequence([1,2,3,4,6,8,10,11,13]);
console.log(res);