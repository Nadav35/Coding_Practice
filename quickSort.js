function quickSort(array) {
  // debugger
  quicksortHelper(array, 0, array.length - 1);
  return array;
}

function quicksortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      [array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];
    }
    if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
  }
  [array[pivotIdx], array[rightIdx]] = [array[rightIdx], array[pivotIdx]];
  let leftSubArrayIsSmaller = rightIdx - 1 + startIdx < endIdx - (rightIdx + 1);

  if (leftSubArrayIsSmaller) {
    quicksortHelper(array, startIdx, rightIdx - 1);
    quicksortHelper(array, rightIdx + 1, endIdx);
  } else {
    quicksortHelper(array, rightIdx + 1, endIdx);
    quicksortHelper(array, startIdx, rightIdx - 1);
  }
}

console.log(quickSort([3, 7, 8, 11, 1, 2, 9, 5, 8]));
