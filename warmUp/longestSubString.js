let array = ['me','muhsin','anees','fawas','nivas','shahid','siddique','amar','ashik','pranav','mirsha','adhil','govinth','fadhil','jaseel']

function findLongestSubString(ar) {
    let subSLength = ar[0].length;
    for(let i = 0;i<ar.length;i++) {
        if(ar[i].length > subSLength) subSLength = ar[i].length
    }
    return subSLength
}

console.log(findLongestSubString(array))
