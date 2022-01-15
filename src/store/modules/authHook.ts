import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as AuthSlice from './auth';

import type { LoginPayload,  RegisterPayload } from './auth';

export default function useUser() {
  const dispatch = useDispatch();

  const login = useCallback((payload: LoginPayload) => {
    dispatch(AuthSlice.login(payload));
  }, []);

  const logout = useCallback(() => {
    dispatch(AuthSlice.logout());
  }, []);

  const register = useCallback((payload: RegisterPayload) => {
    dispatch(AuthSlice.register(payload));
  }, []);

  return { login, logout, register };
}
