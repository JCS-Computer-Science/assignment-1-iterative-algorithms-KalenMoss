function selectionSort(array) {
		let arrayLength = array.length;
			
		for(let num = 0; num < arrayLength; num++) {
			// Finding the smallest number in the subarray
			let min = num;
			for(let nextNum = num+1; nextNum < arrayLength; nextNum++){
				//if the nextNum is smaller then min number nextNum becomes Min
				if(array[nextNum] < array[min]) {
					min=nextNum; 
				}
			 }
			 if (min != num) {
				 // Swapping the elements
				 let tmp = array[num]; 
				 array[num] = array[min];
				 array[min] = tmp;      
			}
		}
		return array;		
	}
	module.exports = selectionSort;