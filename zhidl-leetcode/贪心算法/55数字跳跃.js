/*
 * @author: zhidl
 * @Date: 2021-07-21 09:49:59
 * @description: 
 * @LastEditTime: 2021-07-21 09:59:58
 * @LastEditors: zhidl
 */

// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

var canJump = function(nums) {
    let len = nums.length;
    // m为当前最远跳跃 index的距离
    let m = 0;
    for(let i = 0; i < len; i++) {
        // 跳跃到i， 重新变更最远距离
        if(i <= m) {
            m = Math.max(m, i + nums[i]);
            if(m >= len - 1) {
                return true
            }
        }
    }
    return false;
};