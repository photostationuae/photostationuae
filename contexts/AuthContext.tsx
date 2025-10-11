import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { User } from '../types';

// Mock user data - in a real app, this would come from a database
const MOCK_USERS: { [email: string]: Omit<User, 'email'> & { password_hash: string } } = {
    "user@example.com": { id: "1", name: "Test User", password_hash: "password123" }
};

interface AuthContextType {
    currentUser: User | null;
    login: (email: string, password_hash: string) => Promise<User>;
    logout: () => void;
    signup: (name: string, email: string, password_hash: string) => Promise<User>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        try {
            const userJson = localStorage.getItem('currentUser');
            return userJson ? JSON.parse(userJson) : null;
        } catch (error) {
            console.error("Failed to parse user from localStorage", error);
            return null;
        }
    });

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
    }, [currentUser]);

    const login = (email: string, password_hash: string): Promise<User> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => { // Simulate network delay
                const userRecord = MOCK_USERS[email];
                if (userRecord && userRecord.password_hash === password_hash) {
                    const user: User = { ...userRecord, email };
                    setCurrentUser(user);
                    resolve(user);
                } else {
                    reject(new Error("Invalid credentials"));
                }
            }, 500);
        });
    };

    const signup = (name: string, email: string, password_hash: string): Promise<User> => {
        return new Promise((resolve, reject) => {
             setTimeout(() => {
                if (MOCK_USERS[email]) {
                    reject(new Error("User already exists"));
                } else {
                    const newUser: User = { id: Date.now().toString(), name, email };
                    MOCK_USERS[email] = { ...newUser, password_hash };
                    setCurrentUser(newUser);
                    resolve(newUser);
                }
            }, 500);
        });
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        login,
        logout,
        signup
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
