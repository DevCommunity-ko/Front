import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { thunks } from '../stores/auth';

import type { LoginPayload, RegisterPayload } from '../stores/auth';

export default function useUser() {
  const dispatch = useDispatch();

  const sso = useCallback((payload: LoginPayload) => {
    dispatch(thunks.sso(payload));
  }, []);

  const logout = useCallback(() => {
    dispatch(thunks.logout());
  }, []);

  const additionalInfo = useCallback((payload: RegisterPayload) => {
    dispatch(thunks.additionalInfo(payload));
  }, []);

  return { sso, logout, additionalInfo };
}
