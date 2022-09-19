function binarySearch(array, searchTerm) {
	let start = 0;
    let end = array.length - 1;
    let count = 0;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        count++;
        if (array[middle] == searchTerm) {
            // found the key
            console.log(count);
            return middle;
        } else if (array[middle] < searchTerm) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    console.log(count);
	return null;
}

module.exports = binarySearch;
