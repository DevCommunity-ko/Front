import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// 페이로드 타입은 명세 및 디자인 참조하였음.
// 백엔드 API 완성 후 변동 가능성 있음.

// 로그인 액션 페이로드 타입
type LoginPayload = {
  userId: string,
  socialToken: string,
};

// 회원가입 액션 페이로드 타입
type RegisterPayload = {
  userId: string,
  socialToken: string,
  agreements: boolean[],
  name: string,
  dob: Date,
  email: string,
  gender?: string,
  phone?: string,
  workfield?: string,
  workSpecified?: string,
  careerLength?: string,
};

// 백엔드 DB에서 받아와 헤더 등에서 이용할 데이터
type UserData = {
  userId: string,
  nickName: string,
  loginToken: string,
};

//초기 상태 타입
type UserState = {
  userData: LoginPayload | null,
  error: unknown,
};

const initialState: UserState = {
  userData: null,
  error: null,
};

const login = createAsyncThunk(
  'auth/login',
  // FIXME: async thunk 내부 구현에서 axios 요청을 보내면서 await을 사용할 때 아래 eslint 무시 구문 제거하기
  // eslint-disable-next-line @typescript-eslint/require-await
  async ({ userId, socialToken }: LoginPayload, thunkAPI) => {
    try {
      // TODO: 로그인 요청을 하고 결과를 반환합니다.
      // 결과는 아래의 auth slice의 state에 저장될 값입니다.
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data);
      } else {
        // TODO: axios에서 일어난 오류가 아닐경우 처리하기
      }
    }
  },
);

const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    // TODO: 로그아웃 요청을 합니다.
    // 로그아웃은 별다른 결과값을 반환하지 않으므로 오류 핸들링을 내부에서 별도로 하지 않아도 될 것입니다.
  },
);

const register = createAsyncThunk(
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

    builder.addCase(logout.fulfilled, (state) => {
      // TODO: 로그아웃 실패인 경우를 처리합니다.
      // 그냥 state를 초기화시켜도 되지 않을까 싶습니다.
    });

    builder.addCase(register.fulfilled, (state, action) => {
      // TOOD: 회원가입 성공인 경우를 처리합니다.
    });

    builder.addCase(register.fulfilled, (state, action) => {
      // TOOD: 회원가입 실패인 경우를 처리합니다.
    });
  },
});

export {
  login,
  logout,
  register,
};

export type {
  LoginPayload,
  RegisterPayload,
  UserData,
  UserState,
};

export default reducer;
