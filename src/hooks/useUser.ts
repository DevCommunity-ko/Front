import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as AuthSlice from '../store/modules/auth';

import type { LoginPayload,  RegisterPayload } from '../store/modules/auth';

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
