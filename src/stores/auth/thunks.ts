import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import client from '../../lib/api/client';

import type {
  LoginPayload, LoginResponse, RegisterPayload,
} from './types';

export const sso = createAsyncThunk<LoginResponse, LoginPayload, { rejectValue: undefined }>(
  'auth/sso',
  async ({ code, state }, { rejectWithValue }) => {
    try {
      const resp = await client.post<LoginResponse>('/auth/naver', {
        code,
        state,
      });

      return resp.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // FIXME: null 대신 다른 값 반환하기
        return rejectWithValue(undefined);
      } else {
        // FIXME: null 대신 다른 값 반환하기
        return rejectWithValue(undefined);
      }
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    // TODO: 로그아웃 요청을 합니다.
    // 로그아웃은 별다른 결과값을 반환하지 않으므로 오류 핸들링을 내부에서 별도로 하지 않아도 될 것입니다.
  },
);

export const additionalInfo = createAsyncThunk(
  'auth/register',
  // FIXME: async thunk 내부 구현에서 axios 요청을 보내면서 await을 사용할 때 아래 eslint 무시 구문 제거하기
  // eslint-disable-next-line @typescript-eslint/require-await
  async (payload: RegisterPayload, thunkAPI) => {
    try {
      // TODO: 회원가입 요청을 하고 결과를 반환합니다.
      // 회원가입 후 바로 로그인이 된다고 가정하고 login과 비슷하게 보일러 플레이트를 만들어놨는데
      // 만약 아니라면, 회원가입 요청 후 내려오는 값이 별 쓸모가 없을 것 같으니 logout처럼 간단하게 처리하면 될 것 같습니다.
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data);
      } else {
        // TODO: axios에서 일어난 오류가 아닐경우 처리하기
      }
    }
  },
);
