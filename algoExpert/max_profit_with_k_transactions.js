

let maxProfitWithKTransactions = (prices, k) => {
  // if (prices.length === 0) return 0;

  // let profits = [];
  // while (profits.push(new Array(prices.length)) < k + 1);
  // profits.forEach(row => {
  //   row.fill(0);
  // });

  // for (let t = 1; t < k + 1; t++) {
  //   let maxThusFar = -Infinity;

  //   for (let d = 1; d < prices.length; d++) {
  //     maxThusFar = Math.max(maxThusFar, profits[t - 1][d - 1] - prices[d - 1]);
  //     profits[t][d] = Math.max(profits[t][d - 1], maxThusFar + prices[d]);
  //   }
  // }
  // console.log(profits[k][prices.length - 1]);

  // with O(n) space

  if (prices.length === 0) return 0;

  let evenProfits = new Array(prices.length).fill(0);
  let oddProfits = new Array(prices.length).fill(0);
  for (let t = 1; t < k + 1; t++) {
    let maxThusFar = -Infinity;
    let currentProfits, previousProfits;
    if (t % 2 === 1) {
      currentProfits = oddProfits;
      previousProfits = evenProfits;
    } else {
      currentProfits = evenProfits;
      previousProfits = oddProfits;
    }

    for (let d = 1; d < prices.length; d++) {
      maxThusFar = Math.max(maxThusFar, previousProfits[d - 1] - prices[d - 1]);
      currentProfits[d] = Math.max(currentProfits[d - 1], maxThusFar + prices[d]);
    }
  }

  console.log(`even ${evenProfits} and odd ${oddProfits}`);
  
  


};

maxProfitWithKTransactions([5,11,3,50,60,90], 2);
 


