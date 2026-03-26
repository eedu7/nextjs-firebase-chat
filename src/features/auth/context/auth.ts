import { createContext, useContext } from "react";
import { User } from "@firebase/auth";

interface AuthContextType {
    currentUser: User | null;
    loading: boolean;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthContext");
    }
    return context;
}
