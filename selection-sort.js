function selectionSort(array) {
		let arrayLength = array.length;
			
		for(let i = 0; i < arrayLength; i++) {
			// Finding the smallest number in the subarray
			let min = i;
			for(let j = i+1; j < arrayLength; j++){
				if(array[j] < array[min]) {
					min=j; 
				}
			 }
			 if (min != i) {
				 // Swapping the elements
				 let tmp = array[i]; 
				 array[i] = array[min];
				 array[min] = tmp;      
			}
		}
		return array;		
	}
module.exports = selectionSort;
