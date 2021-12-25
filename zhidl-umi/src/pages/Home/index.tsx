import { FC } from 'react';
import { Button } from 'antd';
import { useModel, IRouteComponentProps } from 'umi';
import { request } from '@/utils/request';

const Home: FC<IRouteComponentProps> = (props) => {
    const { initialState, loading, error, refresh, setInitialState } =
        useModel('@@initialState');

    console.log(props, initialState, loading, 'props');

    async function clickdiv() {
        const res = await request('/home', { a: 1 }, 'post');
        // const res = await request('/home', {a: 1}, 'post')
    }
    return (
        <div>
            <h1 onClick={() => clickdiv()}>首页</h1>
            <Button>123</Button>
            {props.children}
        </div>
    );
};

export default Home;
