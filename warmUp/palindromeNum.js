function palindromeNumber (x) {
    const num = x;
    let rev = 0;
    while(x>0) {
        let reminder = x%10;
        rev = (10*rev) + reminder;
        x = Math.floor(x/10);
    }
    return num == rev;
};

console.log(palindromeNumber(121));