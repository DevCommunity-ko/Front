import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginRequest, LoginPayload, logoutRequest, registerRequest, RegisterPayload } from './auth';

export default function useUser() {
    const dispatch = useDispatch();

    const login = useCallback((payload: LoginPayload) => {
        dispatch(loginRequest(payload));
    }, []);

    const logout = useCallback(() => {
        dispatch(logoutRequest());
    }, []);

    const register = useCallback((payload: RegisterPayload) => {
        dispatch(registerRequest(payload));
    }, []);

    return { login, logout, register }
}