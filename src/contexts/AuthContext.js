// src/contexts/AuthContext.js
import {createContext, useContext} from 'react';
import {LoginService} from "./login.service";

const loginService = new LoginService();


const AuthContext = createContext(
    {
        isLoggedIn: loginService.isLoggedIn(),
        setIsLoggedIn: (val) => {
            loginService.setIsLoggedIn(val);
            window.location.reload();
        },
    }
);

export const useAuth = () => useContext(AuthContext);
