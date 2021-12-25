/*
 * @author: zhidl
 * @Date: 2021-08-10 15:03:23
 * @description: 
 * @LastEditTime: 2021-08-10 15:46:47
 * @LastEditors: zhidl
 */

// app/middleware/response_time.js
module.exports = () => {
    return async function responseTime(ctx, next) {
        const start = Date.now();
        await next();
        const cost = Date.now() - start;
        console.log('cost', ctx.params, cost);
    }
};