function buzzNumber (num) {
    let lastVal = num%10;
    if(lastVal == 7) return true;
    return num%7 == 0 ? true : false;
    
}

 console.log(buzzNumber(107))