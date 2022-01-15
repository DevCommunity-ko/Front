import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  login, logout, register, 
} from './actions';

import type { UserState } from './types';


const initialState: UserState = {
  userData: null,
  error: null,
};

                                                                                                                          
const { reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      // TODO: 로그인 성공 후 서버에서 내려온 값을 state에 저장합니다.
    });

    builder.addCase(login.rejected, (state, action) => {
      // TODO: 로그인 실패인 경우를 처리합니다.
    });

    builder.addCase(logout.fulfilled, (state) => {
      // TODO: 로그아웃 후 state를 초기화시킵니다.
    });

    builder.addCase(logout.rejected, (state) => {
      // TODO: 로그아웃 실패인 경우를 처리합니다.
      // 그냥 state를 초기화시켜도 되지 않을까 싶습니다.
    });

    builder.addCase(register.fulfilled, (state, action) => {
      // TOOD: 회원가입 성공인 경우를 처리합니다.
    });

    builder.addCase(register.rejected, (state, action) => {
      // TOOD: 회원가입 실패인 경우를 처리합니다.
    });
  },
});

export default reducer;
