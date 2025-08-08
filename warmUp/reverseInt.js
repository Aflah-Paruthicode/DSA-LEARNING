function reverseInteger (n) {

    let copyN = n;
    n = Math.abs(n);
    let reverseInt = 0;
    while(n>0) {
        let reminder = n%10;
        reverseInt = (10*reverseInt) + reminder;
        n = Math.floor(n/10);
    }
    let IsInRange = Math.pow(2,31);
    if(reverseInt > IsInRange || reverseInt < IsInRange) return 0;
    return copyN > 0 ? reverseInt : -reverseInt;

}

console.log(reverseInteger(11221))