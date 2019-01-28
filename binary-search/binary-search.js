"use strict";

const binarySearch = (array, target) => {
  if (!array.length) return false;

  if (array.length === 1) {
    if (array[0] === target) {
      return true;
    } else return false;
  }

  let front = 0;
  let end = array.length - 1;
  let middle = Math.ceil(array.length / 2);

  while (front !== middle && end !== middle) {
    if (target === array[middle]) return true;
    else if (target > array[middle]) {
      front = middle;
    } else {
      end = middle;
	}
	middle = Math.ceil((end - front) / 2) + front;
  }

  if (target === array[front] || target === array[end]) return true;

  return false;
};

// Complete this algo
// const binarySearch = (array, target) => {

// 	if (!array.length) return false

// 	if (array.length === 1) {
// 		if (target === array[0]) return true
// 		else return false
// 	}

// 	const midpoint = Math.floor(array.length / 2)
// 	const frontArray = array.slice(0, midpoint)
// 	const backArray = array.slice(midpoint)

// 	if ( target === array[midpoint]) return true

// 	else if (target > array[midpoint]) {
// 		return binarySearch(backArray, target)
// 	}

// 	else {
// 		return binarySearch(frontArray, target)
// 	}
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
