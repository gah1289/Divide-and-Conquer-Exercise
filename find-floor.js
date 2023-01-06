function findFloor(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
	// if (leftIdx > rightIdx) return -1;
	while (leftIdx <= rightIdx) {
		// if value is greater than any number in array, return highest number in array
		if (val >= arr[rightIdx]) return arr[rightIdx];

		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		console.log('leftIdx', leftIdx, 'middleIdx', middleIdx, 'rightIdx', rightIdx, 'arr[middleIdx]', arr[middleIdx]);
		if (val === arr[middleIdx]) return arr[middleIdx];
		// if middle index >0 AND value to the left of middle index <= val AND val < value at the middle of the array
		if (middleIdx > 0 && arr[middleIdx - 1] <= val && val < arr[middleIdx]) {
			return arr[middleIdx - 1];
		}
		// if floor is less than value at the middle index, right index = middle index - 1
		if (val < arr[middleIdx]) {
			return findFloor(arr, val, leftIdx, middleIdx - 1);
		}
		// if floor is greater than value at the middle index, left index = middle index + 1
		if (val > arr[middleIdx]) {
			return findFloor(arr, val, middleIdx + 1, rightIdx);
		}
	}
	return -1;
}

module.exports = findFloor;
