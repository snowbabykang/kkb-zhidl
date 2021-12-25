/*
 * @author: zhidl
 * @Date: 2021-07-07 10:24:19
 * @description: 
 * @LastEditTime: 2021-07-07 10:25:01
 * @LastEditors: zhidl
 */

import styleList from './style'

export default function highlightStyle() {
  return {
    viewerEffect({ file }) {
      // 这里file就是刚才挂载了frontmatter的那个对象
      const hl = file?.frontmatter?.highlight // hl = 'a11y-dark'
      const $style = document.createElement('style')
      // 从styleList获取到'a11y-dark'样式插入到head中
      $style.innerHTML = styleList[hl] ?? styleList['a11y-light']
      document.head.appendChild($style)
      return () => {
        $style.remove()
      }
    }
  }
}
