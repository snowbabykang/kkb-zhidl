/*
 * @author: zhidl
 * @Date: 2021-07-21 10:03:01
 * @description: 
 * @LastEditTime: 2021-07-22 10:46:05
 * @LastEditors: zhidl
 */

// [7,1,5,3,6,4]

var maxProfit = function(prices) {
    let n = prices.length;
    let profit_out = 0; // 卖出时候的利润
    let profit_in = -prices[0]; // 买入时候的利润
    for(let i = 1; i < n; i++) {
        profit_out = Math.max(profit_out, profit_in + prices[i]);
        profit_in = Math.max(profit_in, -prices[i])
    }
    return profit_out;
};

maxProfit([7, 1, 5, 3, 6, 4]);