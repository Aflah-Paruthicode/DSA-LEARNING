function greatestOfThree (num1,num2,num3) {
    if(num1 > num2) {
        return num1 > num3 ? num1 : num3;
    }
    return num2 > num3 ? num2 : num3;
}

console.log(greatestOfThree(10,8,11));