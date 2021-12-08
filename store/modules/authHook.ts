import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '.';
import { login, LoginPayload, logout, register, RegisterPayload } from './auth';

export default function useUser() {
    const dispatch = useDispatch();

    const login = useCallback((payload: LoginPayload) => {
        dispatch(login(payload));
    }, []);

    const logout = useCallback(() => {
        dispatch(logout());
    }, []);

    const register = useCallback((payload: RegisterPayload) => {
        dispatch(register(payload));
    }, []);

    return { login, logout, register }
}