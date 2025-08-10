function countVovelsAndConsonants (str) {
    let vovelsArr = ['a','e','i','o','u'];
    let vovelsCount = 0;
    let consonantsCount = 0;
    for(let i = 0;i<str.length;i++) {
        let count = 0;
        for(let j = 0;j<vovelsArr.length;j++) {
            if(str[i] == vovelsArr[j]) {
                count ++;
            }
        }
        if(count > 0) {
            vovelsCount++;
        } else {
            consonantsCount++;
        }
    }
    return [vovelsCount,consonantsCount];
}

console.log(countVovelsAndConsonants('apple'))