/*
Write a method that takes a hash of symbol keys, for which the values are integers representing each key's weight. The method returns a key such that the chances of selecting a particular key are weighted by that key's value.

For the hash {:a => 1, :b => 2, :c => 3}, the chance of returning :c is 1/2, :b is 1/3, and :a is 1/6.
*/
const leanData = (hash) => {
  const reducer = (acum, cur) => acum + cur;
  const total = Object.values(hash).reduce(reducer);
  const random = Math.floor(Math.random() * (total + 1));
  let sum = 0;

  for (let key in hash) {
    sum += hash[key];
    if (random < sum) {
      return key;
    }
    
  }
  
};

console.log(leanData({ a: 1, b: 2, c: 3 }));
 

