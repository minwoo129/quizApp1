import axios, {AxiosRequestConfig} from 'axios';
import {
  invokeAPICommonArgs,
  invokeAPICommonSecondArgs,
  invokeExternalAPIArgs,
} from './types';
import {API_INFO} from '../config';

/**
 * rest API 요청 전송 함수(내부 호스트 전용)
 *
 * 외부 호스트 API는 호출 불가!!
 *
 * 일반호출 및 Redux 미들웨어에서 모두 사용 가능
 */
export const invokeAPI =
  <T = any>(args: invokeAPICommonArgs) =>
  (args2: invokeAPICommonSecondArgs) => {
    const {method, path} = args;
    const {subPath, params, data} = args2;
    const axiosArgs: AxiosRequestConfig = {
      method,
      url: `${API_INFO.API_PATH}${path}${subPath ?? ''}`,
      params,
      data,
    };
    return axios<T>(axiosArgs);
  };

/**
 * rest API 요청 전송 함수(외부 호스트 사용 가능)
 *
 * 외부 호스트 API 호출 가능
 *
 * 일반 호출은 가능하지만, Redux 미들웨어에서는 사용 불가
 */
export const invokeExternalAPI = <T = any>(args: invokeExternalAPIArgs) => {
  const {method, url, params, data, headers} = args;
  const axiosObj: AxiosRequestConfig = {
    method,
    url,
    params,
    data,
    headers,
  };

  __DEV__ && console.log('restAPI Config: ', axiosObj);

  return axios<T>(axiosObj);
};
