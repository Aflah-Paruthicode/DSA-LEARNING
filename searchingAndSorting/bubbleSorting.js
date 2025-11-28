let arr = [4,5,1,3,9]
  
  function bubbleSort(arr){
    let n = arr.length;
    // for(let i=0; i <arr[j+1]) {
          let temp=arr[j]
          arr[j]=arr[j+1];
          arr[j+1]=temp;
          isSwapped=true;
        }
      
      if(!isSwapped) {
        break;
    }
    return arr;
  }
  let result = bubbleSort(arr)
  console.log("Sorted array",result)