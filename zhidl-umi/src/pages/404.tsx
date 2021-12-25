/*
 * @author: zhidl
 * @Date: 2021-12-23 11:44:08
 * @description: 404无页面
 * @LastEditTime: 2021-12-24 15:44:05
 */

import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => (
    <Result
        status="404"
        title="404"
        subTitle="抱歉，您访问的页面不存在"
        extra={
            <Button type="primary" onClick={() => history.push('/')}>
                回到首页
            </Button>
        }
    />
);

export default NoFoundPage;
