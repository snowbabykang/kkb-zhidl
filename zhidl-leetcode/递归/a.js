/*
 * @author: zhidl
 * @Date: 2021-07-21 14:16:05
 * @description: 
 * @LastEditTime: 2021-07-21 14:38:07
 * @LastEditors: zhidl
 */
function sum(nums = []) {
    if(nums.length === 1) {
        return nums[0];
    }
    nums[1] = nums[0] + nums[1];
    nums.shift();
    return sum(nums);
}
let arr = new Array(10470).fill(1);
let a = sum(arr);

console.log(a, 'aa')
