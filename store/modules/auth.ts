import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MaybeDeferContentHook } from 'next/dist/shared/lib/utils';
import { startLoading, finishLoading } from './loading';

// 페이로드 타입은 명세 및 디자인 참조하였음.
// 백엔드 API 완성 후 변동 가능성 있음.

// 로그인 액션 페이로드 타입
export type LoginPayload = {
  userId: string;
  socialToken: string;
};

// 회원가입 액션 페이로드 타입
export type RegisterPayload = {
  userId: string;
  socialToken: string;
  agreement: boolean[];
  name: string;
  sex: string;
  dob: Date;
  email: string;
  phone: string;
  workfield?: string;
  workSpecified?: string;
  careerLength?: string;
};

// 백엔드 DB에서 받아와 헤더 등에서 이용할 데이터
export type UserData = {
  userId: string;
  nickName: string;
  loginToken: string;
};

//초기 상태 타입
export type UserState = {
  userData: LoginPayload | null;
  error: unknown;
};

const initialState: UserState = {
  userData: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Login
    loginRequest(state: UserState, _action: PayloadAction<LoginPayload>) {},
    loginSuccess(state: UserState, action: PayloadAction<UserData>) {},
    loginFailure(state: UserState, action: PayloadAction<{ error: any }>) {},

    // Logout
    logoutRequest(state: UserState) {},
    logoutSuccess(state: UserState) {},
    logoutFailure(state: UserState, action: PayloadAction<{ error: any }>) {},

    // Register
    registerRequest(state: UserState, action: PayloadAction<RegisterPayload>) {},
    registerSuccess(state: UserState, action: PayloadAction<UserData>) {},
    registerFailure(state: UserState, action: PayloadAction<{ error: any }>) {},
  },
});

const { reducer, actions } = userSlice;
export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
} = actions;
export default reducer;
