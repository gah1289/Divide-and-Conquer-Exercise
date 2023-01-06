function countZeroes(arr) {
	let firstZeroIdx = findFirstZero(arr);
	if (firstZeroIdx === -1) {
		return 0;
	}

	return arr.length - firstZeroIdx;
}

function findFirstZero(arr, leftIdx = 0, rightIdx = arr.length - 1) {
	let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
	while (leftIdx <= rightIdx) {
		// IF 0 is the first value of the array or the value before it is one AND the value = 0, return the index
		if ((middleIdx === 0 || arr[middleIdx - 1] === 1) && arr[middleIdx] === 0) {
			return middleIdx;
		}
		else if (arr[middleIdx - 1] === 0) {
			// IF  the number before arr[middleIdx] is also 0, rerun the function with the first half of the array
			return findFirstZero(arr, leftIdx, middleIdx - 1);
		}
		else {
			// IF  the number after arr[middleIdx] is 1, rerun the function with the first half of the array
			return findFirstZero(arr, middleIdx + 1, rightIdx);
		}
	}
	return -1;
}

module.exports = countZeroes;
