/*
 * @author: zhidl
 * @Date: 2021-12-24 15:30:02
 * @description: 无权限403页面
 * @LastEditTime: 2021-12-24 15:43:49
 */
import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoAccessPage: React.FC = () => (
    <Result
        status="403"
        title="403"
        subTitle="抱歉，您没有访问该页面的权限"
        extra={[
            <Button onClick={() => history.push('/')}>回到首页</Button>,
            <Button type="primary">申请权限</Button>,
        ]}
    />
);

export default NoAccessPage;
