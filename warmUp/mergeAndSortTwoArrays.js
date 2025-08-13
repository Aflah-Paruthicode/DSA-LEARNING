function mergeAndSortTwoArrays (arr1,arr2) {
    let merged = [...arr1,...arr2];
    let temp = 0;
    
    for(let i = 0;i<merged.length;i++) {
        for(let j = i+1;j<merged.length;j++) {
            if(merged[i] > merged[j]) {
                temp = merged[i];
                merged[i] = merged[j];
                merged[j] = temp;
            }
        }
    }
    return merged;
}

console.log(mergeAndSortTwoArrays([1,2,8,3],[2,5,6,9,7]))