
// 페이로드 타입은 명세 및 디자인 참조하였음.
// 백엔드 API 완성 후 변동 가능성 있음.

// 로그인 액션 페이로드 타입
export type LoginPayload = {
  code: string,
  state: string,
};

export type LoginResponse = {
  newMember: boolean,
  userId: number,
};

// 회원가입 액션 페이로드 타입
export type RegisterPayload = {
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
export type UserData = {
  userId: string,
  nickName: string,
  loginToken: string,
};

//초기 상태 타입
export type UserState = {
  userData?: LoginResponse,
  error?: unknown,
};
