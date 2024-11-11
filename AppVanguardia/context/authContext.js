import { createContext, useContext, useEffect, useState } from 'react';

// Create context object
export const AuthContext = createContext();

// Define AuthProvider with `AuthContext.Provider`
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        // onAuthStateChanged logic can go here
        // setTimeout(() => {
            setIsAuthenticated(false);
        // }, 3000);
    }, []);

    const login = async (email, password) => {
        try {
            // Implement login logic here
        } catch (error) {
            // console.error(error);
        }
    };

    const logout = async () => {
        try {
            // Implement logout logic here
        } catch (error) {
            // console.error(error);
        }
    };

    const register = async (email, password, username, profileUrl) => {
        try {
            // Implement registration logic here
        } catch (error) {
            // console.error(error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const useAuth = () => {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return value;
};
