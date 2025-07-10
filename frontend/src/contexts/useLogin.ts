import { createContext, useContext } from "react";

interface LoginContextData {
    login: boolean;
    setLogin: (isLoggedIn: boolean) => void;
}

export const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export const useLogin = () => {
    return useContext(LoginContext);
};