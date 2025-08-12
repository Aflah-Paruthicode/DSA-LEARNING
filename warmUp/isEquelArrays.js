function isTwoArraysEquel (arr1,arr2) {
    
    return arr1.every((ele,index) => ele == arr2[index] )
}

console.log(isTwoArraysEquel([1,2,3],[1,2]))