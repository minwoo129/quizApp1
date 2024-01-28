import {createAsyncThunk} from '@reduxjs/toolkit';
import {invokeAPICommonSecondArgs, method} from '../../restAPI/types';
import {invokeAPI} from '../../restAPI';

type createPromiseThunkArgs = {
  /** Redux 액션 타입 */
  type: string;
  /** restAPI 요청 메서드(get, post, put, patch, delete) */
  method: method;
  /** 내부 호스트 API 요청 시 기본 API 경로 */
  path: string;
};

/**
 * 일반 restAPI 호출 시 사용할 Thunk 미들웨어
 */
export const createPromiseThunk = <T>(args: createPromiseThunkArgs) => {
  const {type, method, path} = args;

  return createAsyncThunk<T, invokeAPICommonSecondArgs>(
    type,
    async (data, {rejectWithValue}) => {
      try {
        const result = await invokeAPI<T>({method, path})({...data});
        return result.data;
      } catch (e: any) {
        return rejectWithValue(e);
      }
    },
  );
};
