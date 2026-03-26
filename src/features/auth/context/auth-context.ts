import { createContext, useContext } from "react";
import { User } from "@firebase/auth";
import { UseMutationResult } from "@tanstack/react-query";
import { UserLoginSchema } from "@/features/auth/auth.schema";

interface AuthContextType {
    currentUser: User | null;
    loading: boolean;
    isAuthenticated: boolean;
    login: UseMutationResult<User, Error, UserLoginSchema>;
    register: UseMutationResult<User, Error, UserLoginSchema>;
    logout: UseMutationResult<void, Error, void>;
    signInWithGoogle: UseMutationResult<User, Error, void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthContext");
    }
    return context;
}
