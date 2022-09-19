function linearSearch(array, searchTerm) {
	let count = 0;
	for(let check = 0; check < array.length; check++){
		count++;
		if(array[check] == searchTerm){
			console.log(count);
			return check;
		}
		
	}
	console.log(count);
	return null;
}
module.exports = linearSearch;
