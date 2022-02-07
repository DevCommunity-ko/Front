import { createSlice } from '@reduxjs/toolkit';

import {
  sso, logout, additionalInfo,
} from './actions';

import type { UserState } from './types';


const initialState: UserState = {};


const { reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sso.fulfilled, (state, action) => {
      const { payload } = action;
      state.userData = {
        ...payload,
      };
    });

    builder.addCase(sso.rejected, (state, action) => {
      // TODO: 로그인 실패인 경우를 처리합니다.
    });

    builder.addCase(logout.fulfilled, (state) => {
      // TODO: 로그아웃 후 state를 초기화시킵니다.
    });

    builder.addCase(logout.rejected, (state) => {
      // TODO: 로그아웃 실패인 경우를 처리합니다.
      // 그냥 state를 초기화시켜도 되지 않을까 싶습니다.
    });

    builder.addCase(additionalInfo.fulfilled, (state, action) => {
      // TOOD: 추가 개인 정보 입력에 성공한 경우를 처리합니다.
    });

    builder.addCase(additionalInfo.rejected, (state, action) => {
      // TOOD: 추가 개인 정보 입력에 실패한 경우를 처리합니다.
    });
  },
});

export default reducer;
