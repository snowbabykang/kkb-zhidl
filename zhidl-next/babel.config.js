/*
 * @author: zhidl
 * @Date: 2021-07-05 17:04:09
 * @description: 
 * @LastEditTime: 2021-07-05 18:06:50
 * @LastEditors: zhidl
 */
module.exports ={
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components", 
      { "ssr": true },

    ],
    [
      'import', 
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: 'index.css',
      },
    ]
  ]
}