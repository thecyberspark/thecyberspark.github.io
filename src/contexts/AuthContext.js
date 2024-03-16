// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
const AuthContext = createContext(
    {
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: (val) => {
            localStorage.setItem('isLoggedIn', val);
            window.location.reload();
        },
    }
);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check localStorage or make an API call to determine if the user is logged in
        const userIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(userIsLoggedIn);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
