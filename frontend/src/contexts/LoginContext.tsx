import { useState, type ReactNode } from "react";
import { LoginContext } from "./useLogin";

export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const [login, setLoginState] = useState(false);

    const setLogin = (isLoggedIn: boolean) => {
        setLoginState(isLoggedIn);
    };

    return (
        <LoginContext.Provider value={{ login, setLogin }}>
            {children}
        </LoginContext.Provider>
    );
};