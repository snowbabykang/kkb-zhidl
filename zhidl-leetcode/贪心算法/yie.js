/*
 * @author: zhidl
 * @Date: 2021-07-21 11:09:53
 * @description: 
 * @LastEditTime: 2021-07-21 11:48:13
 * @LastEditors: zhidl
 */


function* a() {
    yield new Promise(resolve => resolve(1))
    yield new Promise(resolve => resolve(2))
}

let zdl = a();



var O = function () {
    this.a = 111;
}

O = new O();

console.log(O);