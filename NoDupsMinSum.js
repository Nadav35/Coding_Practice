// input: an Array of integers

// output: the array with all duplicates replaced by
// other integers such that the smallast possible number 
// that it greater by 1 or more than the current number and that isn't 
// a duplicate will replace the duplicated number,

// for example, an array of [1,3,1,5,3,2,8,5] will produce
// [4,6,1,7,3,2,8,5]

function removeDups(array) {
  // if (array.length === 1) return array;
  array = array.sort();
  // [1,1,2,3,3,5,5,8] => [1, 2, 3, 4, 5, 6, 7,8]
  // cur: 8
  
  
  let cur = array[0];
  for (let i = 1; i < array.length; i++ ) {
    if (cur >= array[i]) {
      array[i] = ++cur;
    } else if (cur < array[i]){
      cur++;
      
    }
  }
  console.log(array);
  
    
}

removeDups([1,1,1,1,1,1,1,1]);

