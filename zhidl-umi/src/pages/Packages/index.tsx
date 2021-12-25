/*
 * @author: zhidl
 * @Date: 2021-12-25 19:50:00
 * @description: 包管理
 * @LastEditTime: 2021-12-25 19:56:07
 */
import { FC } from 'react';
import { IRouteComponentProps } from 'umi';
// import { request } from '@/utils/request';

const Index: FC<IRouteComponentProps> = (props) => {
    return <>{props.children}</>;
};

export default Index;
