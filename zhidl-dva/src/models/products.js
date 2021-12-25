/*
 * @author: zhidl
 * @Date: 2021-11-12 17:09:43
 * @description:  处理 products 数据 逻辑
 * @LastEditTime: 2021-11-14 20:46:26
 */

async function sleep(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}


export default {
  // 表示在全局 state 上的 key
  namespace: "products",
  // 初始值，
  state: 0,
  // 等同于 redux 里的 reducer，接收 action，同步更新 state
  reducers: {
    // delete(state, { payload: id }) {
    //   return state.filter((item) => item.id !== id);
    // },
    set(state, action) {
      switch (action.payload) {
        case "add":
          return ++state;
        case "del":
          return --state;
        default:
          return state;
      }
    },
    initState(state, action) {
      return 0
    }
  },
  // 副作用 需要使用 generator的相关概念
  effects: {
    // yield put({ type: 'minus' });
    // Effect 是一个 Generator 函数，内部使用 yield 关键字，标识每一步的操作（不管是异步或同步）。
    // 需要跟reducers 同名
    *initState(action, {call, put}) {
      yield call(sleep, 2000);
      console.log(action, 'action');
      yield put({type: 'set', payload: 'add'})
      return 0;
      // console.log(action, call ,put, 'zdl');
    }
  },
  // 订阅数据源
  // subscriptions 中配置的key的名称没有任何约束，而且只有在app.unmodel的时候才有用。
  // subscriptions 中配置的只能dispatch所在model的reducer和effects。
  // subscriptions 中配置的函数只会执行一次，也就是在调用 app.start() 的时候，会遍历所有 model subscriptions 执行一遍。
  // subscriptions 中配置的函数需要返回一个函数，该函数应该用来取消订阅的该数据源。
  subscriptions: {
    setup({ dispatch, history }) {
      // 订阅，可以监听服务器连接，键盘输入，路由，状态等的变化
      console.log('ddd');
    },
  },
};
