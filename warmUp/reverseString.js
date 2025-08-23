let reverseString = function(s) {

    let length = s.length-1;
    let temp;

    for(let i = 0;i<s.length/2;i++) {
        temp = s[i]
        s[i] = s[length-i];
        s[length-i] = temp
    }
    return s
};

console.log(reverseString(['h','e','y']))