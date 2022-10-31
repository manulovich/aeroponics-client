import { createContext, useContext, useState } from 'react';
import AuthService from '../serverServices/Auth';

const AuthContext = createContext({
    token: localStorage.getItem('token') || undefined,
    async login(email: string, password: string, cb: Function) { },
    async registration(email: string, username: string, password: string, cb: Function) { },
    signout(cb: Function) { },
    recovery(email: string, cb: Function) { },
});
const useAuthContext = () => useContext(AuthContext);

interface AuthProviderProps {
    children: JSX.Element[] | JSX.Element
}
const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState<string | undefined>(localStorage.getItem('token') || '');
    const authService = new AuthService();

    const responseHandler = (response: any, cb: Function) => {
        if (response?.error) {
            console.log("aaa", response)
            cb(response);
        } else {
            localStorage.setItem('token', response.token);
            setToken(response.token);
            cb(null);
        }
    };

    const login = async (
        email: string,
        password: string,
        cb: Function
    ) => {
        const response = await authService.login(email, password);

        responseHandler(response, cb);
    };
    const registration = async (
        email: string,
        username: string,
        password: string,
        cb: Function
    ) => {
        const response = await authService.registration(email, username, password);
        console.log(response)
        responseHandler(response, cb);
    };
    const signout = async (cb: Function) => {
        setToken(undefined);
        localStorage.removeItem('token');
        cb();
    };
    const recovery = async (
        email: string,
        cb: Function
    ) => {
        const response = await authService.recovery(email);
        responseHandler(response, cb);
    }

    const value = {
        token,
        login,
        registration,
        signout,
        recovery
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export {
    AuthContext,
    useAuthContext
}