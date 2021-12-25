/*
 * @author: zhidl
 * @Date: 2021-12-24 14:22:48
 * @description:
 * @LastEditTime: 2021-12-25 20:27:54
 */

import { useModel, history } from 'umi';
import React, { useCallback } from 'react';
// import Avatar from './AvatarDropdown';
import {
    LogoutOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Space, Avatar, Menu, Dropdown, Button } from 'antd';
import imgUrl from '@/assets/svg/logo.svg';
import styles from './index.less';

const GlobalHeaderRight: React.FC = () => {
    const { initialState, setInitialState } = useModel('@@initialState');
    const currentUser = initialState?.currentUser;
    // <Space >
    //     <Avatar />
    // </Space>

    // todo 退出登录
    function logout() {
        history.push({
            pathname: '/login',
            query: {
                redirect: window.location.href,
            },
        });
    }
    const menu = (
        <Menu className={styles.menu}>
            <Menu.Item key="user">
                <UserOutlined />
                个人中心
            </Menu.Item>
            <Menu.Item key="settings">
                <SettingOutlined />
                个人设置
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout" onClick={logout}>
                <LogoutOutlined />
                退出登录
            </Menu.Item>
        </Menu>
    );

    return (
        <Space>
            {/* <Menu
                className={styles.menu}
                selectedKeys={[]}
                onClick={onMenuClick}
            >
                <Menu.Item key="logout">
                    <LogoutOutlined />
                    退出登录
                </Menu.Item>
            </Menu> */}
            <Dropdown overlay={menu} placement="bottomRight">
                <span className={`${styles.action} ${styles.account}`}>
                    {/* todo 头像更换 */}
                    <Avatar
                        shape="square"
                        className={styles.avatar}
                        src={imgUrl}
                        alt="avatar"
                    />
                    <span className={`${styles.name} anticon`}>zhidl</span>
                </span>
            </Dropdown>
        </Space>
    );
};

export default GlobalHeaderRight;
