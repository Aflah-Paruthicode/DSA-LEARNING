function sumOfNOddNumbers (num) {
    let res = [];
    for(let i = 1;res.length<num;i++) {
        if(i%2 == 0) {
            res.push(i);
            
        }
    }
    return res.reduce((acc,ele) => acc+=ele,0);
}

console.log(sumOfNOddNumbers(5))