function binarySearch(array, searchTerm) {
	let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] == searchTerm) {
            // found the key
            return middle;
        } else if (array[middle] < searchTerm) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	return null;
}

module.exports = binarySearch;
