function sumOfDigits (n) {
    let digits = n.toString().split('').map(Number);
    let result = 0;
    for(let i = 0;i<digits.length;i++) {
        result+= digits[i];
    }
    return result;
}

console.log(sumOfDigits(543))