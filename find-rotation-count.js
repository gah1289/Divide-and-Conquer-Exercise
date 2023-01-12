function findRotationCount(arr, leftIdx = 0, rightIdx = arr.length - 1) {
	// use linear search to solve first
	// let min = arr[0];
	// let minIndex = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] < min) {
	// 		min = arr[i];
	// 		minIndex = i;
	// 	}
	// }
	// return minIndex;

	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		// take previous element. Can't be less than 0
		let previousIdx = middleIdx - 1;
		if (previousIdx < 0) return 0;
		// take index of next element. Can't be greater than arr.length-1
		let nextIdx = middleIdx + 1;
		if (nextIdx > arr.length + 1) return 0;

		// if min is last number, return index of last number
		if (arr[rightIdx] < arr[rightIdx - 1]) return rightIdx;

		// if previous element is greater than middle element and next element is less than middle element, you found the min. Return the index of the previous element

		if (arr[previousIdx] > arr[middleIdx]) {
			return middleIdx;
		}
		else if (arr[previousIdx] < arr[middleIdx] && arr[middleIdx] < arr[nextIdx]) {
			// if previous is less than and next is greater than, ignore.
			return findRotationCount(arr, leftIdx, middleIdx - 1);
		}
		else {
			// if previous is less than and next is greater than, ignore.
			return findRotationCount(arr, middleIdx + 1, rightIdx);
		}
	}
}

module.exports = findRotationCount;
