function findRotatedIndex(arr, val) {
	let pivotIdx = findPivotIdx(arr);

	// if value is in the first part of the array before the pivot, set the left and right index to the first pivot
	if (pivotIdx > 0 && val >= arr[0] && val <= arr[pivotIdx]) {
		return searchForVal(arr, val, 0, pivotIdx);
	}
	else {
		// if value is in the second part of the array after the pivot, set the left and right index to the second pivot

		return searchForVal(arr, val, pivotIdx, arr.length - 1);
	}
}

function findPivotIdx(arr, leftIdx = 0, rightIdx = arr.length - 1) {
	let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
	let middleVal = arr[middleIdx];

	while (leftIdx <= rightIdx) {
		// if value in the middle is greater than both the value before and after it, return the index of the value.
		if (middleVal > arr[middleIdx - 1] && middleVal > arr[middleIdx + 1]) {
			return middleIdx;
		}
		else if (middleVal > arr[middleIdx - 1] && middleVal < arr[middleIdx + 1]) {
			// if the pivot is to the left of the middle value, i.e. the number to the left is less than middleVal and the number to the right is greater than middleVal, rerun the function with the first half of the array
			return findPivotIdx(arr, leftIdx, middleIdx - 1);
		}
		else {
			// if the pivot is to the right of middleVal, rerun the function with the second half of the array
			return findPivotIdx(arr, middleIdx + 1, rightIdx);
		}
	}
	return -1;
}

function searchForVal(arr, val, leftIdx, rightIdx) {
	if (arr.length === 0) {
		return -1;
	}

	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

		if (val === arr[middleIdx]) {
			return middleIdx;
		}
		else if (val < arr[middleIdx]) {
			rightIdx = middleIdx - 1;
		}
		else {
			leftIdx = middleIdx + 1;
		}
	}
	return -1;
}

module.exports = findRotatedIndex;
