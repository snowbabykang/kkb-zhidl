/*
 * @author: zhidl
 * @Date: 2021-07-21 10:31:46
 * @description: 
 * @LastEditTime: 2021-07-22 10:42:25
 * @LastEditors: zhidl
 */



var maxProfit = function(prices) {
    let n = prices.length;
    let profit_out = 0; 
    let profit_in = 0 - prices[0];
    for (let i = 1; i < n; ++i) {
        profit_out = Math.max(profit_out, profit_in + prices[i]);
        profit_in = Math.max(profit_in, profit_out - prices[i])
    }
    return profit_out;
};

maxProfit([7,1,5,3,6,4]);
// [7,1,5,3,6,4]