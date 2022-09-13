function bubbleSort(array) {
    //gets length of array,
    let len = array.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (array[i] > array[i + 1]) {
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return array;
}

module.exports = bubbleSort;
