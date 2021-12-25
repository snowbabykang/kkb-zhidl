import { NextPage } from 'next';
import { useState, Fragment, useCallback, useEffect } from 'react';



// 编辑 / 视图
import { Editor, Viewer } from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight-ssr';
import mediumZoom from "@bytemd/plugin-medium-zoom";
import gemoji from "@bytemd/plugin-gemoji";
// 引入中文包
import zhHans from "bytemd/lib/locales/zh_Hans.json";

// 引入基础css
import 'bytemd/dist/index.min.css';
// 引入高亮css
import "highlight.js/styles/vs.css";

const plugins = [gfm(), gemoji(), highlight(), mediumZoom()];

const Home: NextPage = () => {
  const [value, setValue] = useState('');

  // 需要经过接口处理
  const uploadImages = useCallback((files: File[]) => {
    console.log(files, 'files');
    return Promise.resolve([
      { 
        
         title: '',
         url: "111",
         alt: ''
      },
    ]);
  }, [])
  return (
    <Fragment>
      <Editor
        value={value}
        plugins={plugins}
        locale={zhHans}
        onChange={(v) => {
          console.log(v, 'vvv');
          setValue(v);
        }}
        uploadImages={uploadImages}
      />
    </Fragment>
    
  )
}

export default Home
