function insertionSort(array) {
	let arrLength = array.length;
	for (let selNum = 1; selNum < arrLength; selNum++) {
		// Choosing the first element in our unsorted subarray
		let current = array[selNum];
		// The last element of our sorted subarray
		let y = selNum-1; 
		while ((y > -1) && (current < array[y])) {
			array[y+1] = array[y];
			y--;
		}
		array[y+1] = current;
	}
return array;
}

module.exports = insertionSort;
