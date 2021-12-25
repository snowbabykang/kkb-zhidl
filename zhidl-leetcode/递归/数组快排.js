/*
 * @author: zhidl
 * @Date: 2021-07-21 14:46:36
 * @description: 
 * @LastEditTime: 2021-07-21 15:25:46
 * @LastEditors: zhidl
 */



function quickSort(arr = []) {
    let len = arr.length;
    if (len < 2) {
        return arr
    } else {
        let base_num = arr[0]; // 基准线
        let left_num = [];
        let right_num = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < base_num) {
                left_num.push(arr[i]);
            } else {
                right_num.push(arr[i]);
            }
        }
        if (left_num.length >= 2) {
            left_num = quickSort(left_num); // 左侧再次排
        }
        if (right_num.length >= 2) {
            right_num = quickSort(right_num);
        }
        return left_num.concat([base_num], right_num);
    }
}
let a = quickSort([3, 1, 2, 4, 5, 1, 1, 2, 11, 2, 3, 5, 1, 8, 7]);

console.log(a, 'aa')