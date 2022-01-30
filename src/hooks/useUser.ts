import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from '../stores/auth';

import type { LoginPayload,  RegisterPayload } from '../stores/auth';

export default function useUser() {
  const dispatch = useDispatch();

  const sso = useCallback((payload: LoginPayload) => {
    dispatch(actions.sso(payload));
  }, []);

  const logout = useCallback(() => {
    dispatch(actions.logout());
  }, []);

  const additionalInfo = useCallback((payload: RegisterPayload) => {
    dispatch(actions.additionalInfo(payload));
  }, []);

  return { sso, logout, additionalInfo };
}
