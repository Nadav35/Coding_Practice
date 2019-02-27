// [1, 3, 4, 20, -7, 10, -1] ==> 33 , 3 + 20 + 10

// ==> [1, 3, 5, 23, 23, 33, 33]

// [3, 1, 15, 3, 7, -5, 20, 30] ==> 55

function largestNonContingentSum(array) {
  let retArr = [];
  if (array[0] > array[1]) {
    retArr.push(array[0]);
    retArr.push(array[0]);
  } else {
    retArr.push(array[0]);
    retArr.push(array[1]);
  }

  for (let i = 2; i < array.length; i++) {
    if (array[i] + retArr[i - 2] > retArr[i - 1]) {
      retArr.push(array[i] + retArr[i - 2]);
    } else {
      retArr.push(retArr[i - 1]);
    }
  }

  console.log(retArr.pop());
}

largestNonContingentSum([3, 1, 15, 3, 7, -5, 20, 30]);

