var maxProfit = function (prices, fee) {
    let n = prices.length;
    // 最小价格买入 即为买入利润最小
    let profit_in = 0 - prices[0];
    let profit_out = 0;

    for (let i = 1; i < n; i++) {
        profit_out = Math.max(profit_out, profit_in + prices[i] - fee);
        profit_in = Math.max(profit_in, profit_out - prices[i]);
    }
    return profit_out;
};