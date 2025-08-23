let countEven = function (num) {

    let count = 0
    for (let i = 2; i <= num; i++) {
        let sum = i.toString().split('').map(Number).reduce((accu,ele) => (accu+=ele),0);
        if(sum%2 == 0) count ++
    }
    return count;
};

console.log(countEven(30));