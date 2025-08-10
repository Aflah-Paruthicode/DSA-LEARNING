function isNeonNumber(num) {
    let res = (num * num).toString().split('').map(Number).reduce((acc,ele) => acc += ele,0);
    return res == num ? true : false
}

console.log(isNeonNumber(2))