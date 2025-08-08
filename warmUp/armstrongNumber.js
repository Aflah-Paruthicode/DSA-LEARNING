function armstrongNumber (num) {
    
    let digits = num.toString().split('').map(Number)
    let power = digits.length;
    let result = 0
    
    for(let i = 0;i<digits.length;i++) {
        let calc = Math.pow(digits[i],power);
        result += calc
    }
    
    return result;
    
}

console.log(armstrongNumber(153));