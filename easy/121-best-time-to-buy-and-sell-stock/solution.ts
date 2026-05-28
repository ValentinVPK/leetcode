function maxProfit(prices: number[]): number {
  // Brute force - O(n^2)
  // let maxProfit = 0;

  // for(let i = prices.length - 1; i > 0; i--) {
  //   for(let j = i - 1; j >= 0; j--) {
  //      let profit = prices[i] - prices[j];

  //      if(profit > maxProfit) {
  //         maxProfit = profit;
  //      }
  //   }
  // }

  //return maxProfit;

  // Correct - O(n)

  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    let newProfit = prices[i] - minPrice;
    if (newProfit > maxProfit) {
      maxProfit = newProfit;
    }
  }

  return maxProfit;
}
