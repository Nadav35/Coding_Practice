function bSearch(arr, target) {
  // if (arr.length === 0) return -1;

  // let mid = Math.floor(arr.length / 2);
  // let el = arr[mid];
  // if (el === target) return mid;

  // if (el > target) {
  //   return bSearch(arr.slice(0, mid), target);
  // } else {
  //   let ret = bSearch(arr.slice(mid + 1), target);
  //   if (ret === -1) return -1;
  //   return ret + mid + 1;
  // }

  // with left and right pointers
  return pointersBSearch(arr, target, 0, arr.length);

}

function pointersBSearch(arr, target, left, right) {
  if (left >= right) return -1;
  let mid = Math.floor((left + right) / 2);
  let curEl = arr[mid];

  if (curEl === target) return mid;
  // go left, else go right
  if (curEl > target) {
    return pointersBSearch(arr, target, left, mid);
  } else {
    return pointersBSearch(arr, target, mid + 1, right);
  }

}

// problem: given a sorted array of integers, some of them duplicates,
// and a number, find how many times the number appears in the array.
function numOfDups(arr, target) {
  let leftIndex = null;
  let rightIndex = null;
  let left = 0;
  let right = arr.length;
  let tempIndex = pointersBSearch(arr, target, left, right);
  if (arr[tempIndex] !== arr[tempIndex - 1]) {
    leftIndex = tempIndex;
  }
  if (arr[tempIndex] !== arr[tempIndex + 1]) {
    rightIndex = tempIndex;
  }
  while (leftIndex === null) {
    tempIndex = pointersBSearch(arr, target, left, tempIndex);
    if (arr[tempIndex] !== arr[tempIndex - 1]) {
      leftIndex = tempIndex;
    }
  }
  while (rightIndex === null) {
    tempIndex = pointersBSearch(arr, target, tempIndex + 1, right);
    if (arr[tempIndex] !== arr[tempIndex + 1]) {
      rightIndex = tempIndex;
    }
  }
  return rightIndex - leftIndex + 1;
}

// console.log(bSearch([1, 5, 23, 111], 24));
console.log(numOfDups([1, 2, 3, 3, 3, 3, 4, 5, 6, 6, 7, 7], 3));
