/*
 * @author: zhidl
 * @Date: 2021-07-22 10:50:02
 * @description: 
 * @LastEditTime: 2021-07-22 10:59:49
 * @LastEditors: zhidl
 */


var maxProfit = function(prices) {
    let n = prices.length;
    // 最小价格买入 即为买入利润最小
    let profit_in = 0 - prices[0];
    let profit_out = 0;
    //冻结时的利润
    let profit_freeze = 0;
    for(let i = 1; i < n; i++) {
        let temp = profit_out;
        // 卖出利润为 买入利润 + 当天价格
        profit_out = Math.max(profit_out, profit_in + prices[i]);
        // 每次买入的利润为 冻结利润 - 当天价格
        profit_in = Math.max(profit_in, profit_freeze - prices[i]);
        // 冻结时候的利润 为上一次卖出时候的利润
        profit_freeze = temp;
    }

    return profit_out;
};