function sortedFrequency(arr, val) {
	const firstIdx = findFirst(arr, val);

	const lastIdx = findLast(arr, val);

	// if value is not in sorted array, return -1
	if (val < arr[0] || val > arr[arr.length - 1]) {
		return -1;
	}

	return lastIdx - firstIdx + 1;
}

function findFirst(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
	if (rightIdx >= leftIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		// if value is the first number of array or the value before val is less than val
		if ((middleIdx === 0 || val > arr[middleIdx - 1]) && arr[middleIdx] === val) {
			return middleIdx;
		}
		else if (val > arr[middleIdx]) {
			// if val is greater than the value at the middle index, rerun the function with the second half of the array only
			return findFirst(arr, val, middleIdx + 1, rightIdx);
		}
		else {
			// if val is less than the value at the middle index, rerun the function with the first half of the array only
			return findFirst(arr, val, leftIdx, middleIdx - 1);
		}
	}
}
function findLast(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
	if (rightIdx >= leftIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		// if middleIdx is the index of the last value or val is less than (NOT equal to) the next value AND arr[middleIdx] is equal to val, return the index
		if ((middleIdx === arr.length - 1 || val < arr[middleIdx + 1]) && arr[middleIdx] === val) {
			return middleIdx;
		}
		else if (val < arr[middleIdx]) {
			// if val is less than the value at the middle of the array, rerun the function using only the first half of the array
			return findLast(arr, val, leftIdx, middleIdx - 1);
		}
		else {
			// if val is greater than the value at the middle of the array, rerun the funtion using only the second half of the array

			return findLast(arr, val, middleIdx + 1, rightIdx);
		}
	}
}

module.exports = sortedFrequency;
