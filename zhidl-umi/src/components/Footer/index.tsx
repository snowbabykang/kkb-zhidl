/*
 * @author: zhidl
 * @Date: 2021-12-24 14:31:45
 * @description:
 * @LastEditTime: 2021-12-25 20:47:15
 */
import { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined } from '@ant-design/icons';

export default function () {
    const currentYear = new Date().getFullYear();
    return (
        <DefaultFooter
            copyright={`${currentYear} SensorsData 版权所有`}
            links={false}
        ></DefaultFooter>
    );
}
