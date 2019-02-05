/* Given a number greater than 9, you are allowed one switch of its digits.
return the greatest possible number. 
for example, given 98901 => 99801 or 46989 => 96984
*/

// 99237 => 99732
// 98901 => 99801
// 82990 => 92980
// 98765 => 98765



let biggestNumWithSwitch = (number) => {
  // dump each individual digit into an array
  let numArray = [];
  while (number > 0) {
    numArray.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  let switchIndex = null;
  let maxNumber = 0;
  let maxIndex;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] >= maxNumber) {
      maxNumber = numArray[i];
      maxIndex = i;
    }
    if (!switchIndex && numArray[i] < numArray[i + 1]) switchIndex = i;
  }
  // if greatest digit isn't in first position
  // console.log(switchIndex);
  
  if (numArray[0] < maxNumber) {
    [numArray[0], numArray[maxIndex]] = [numArray[maxIndex], numArray[0]];
    return numArray;
  } else {
    
  }

  
  
};

console.log(biggestNumWithSwitch(98901));
