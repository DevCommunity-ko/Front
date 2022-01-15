import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from '../stores/auth';

import type { LoginPayload,  RegisterPayload } from '../stores/auth';

export default function useUser() {
  const dispatch = useDispatch();

  const login = useCallback((payload: LoginPayload) => {
    dispatch(actions.login(payload));
  }, []);

  const logout = useCallback(() => {
    dispatch(actions.logout());
  }, []);

  const register = useCallback((payload: RegisterPayload) => {
    dispatch(actions.register(payload));
  }, []);

  return { login, logout, register };
}
