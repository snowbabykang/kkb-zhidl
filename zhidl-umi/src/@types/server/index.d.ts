/*
 * @author: zhidl
 * @Date: 2021-12-23 19:58:04
 * @description:
 * @LastEditTime: 2021-12-23 20:27:14
 */

// 请求方法参数约束
declare function Drequest<URL extends keyof API>(
  path: URL,
  params: API[URL]['params'],
  method: API[URL]['method'],
): Promise<Server<API[URL]['res']>>;

// 服务端接口基本类型
type Server<T> = {
  errMsg: string;
  data: T;
  code: Tcode;
};
type Tcode =
  | 200
  | 201
  | 202
  | 204
  | 400
  | 401
  | 403
  | 404
  | 405
  | 406
  | 410
  | 422
  | 500
  | 502
  | 503
  | 504;
