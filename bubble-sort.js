function bubbleSort(array) {
    let firstNum; 
    let checkedNum;
    let len = array.length;
    let isSwapped = false;
   
  for(firstNum = 0;  firstNum < len; firstNum++){
     
    isSwapped = false;
     
    for(checkedNum = 0; checkedNum < len; checkedNum++){
        if(array[checkedNum] > array[checkedNum + 1]){
          let temp = array[checkedNum]
          array[checkedNum] = array[checkedNum+1];
          array[checkedNum+1] = temp;
          isSwapped = true;
        }
    }
     
    // IF no two elements were swapped by inner loop, then break
    if(!isSwapped){
      break;
    }
  }
  return array;
}

module.exports = bubbleSort;
