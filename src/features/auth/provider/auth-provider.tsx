"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "@firebase/auth";
import { clientAuth } from "@/lib/firebase/client";
import { AuthContext } from "../context/auth-context";
import { useLogin, useLogout, useRegister, useSignInWithGoogle } from "@/features/auth/hooks/auth.hooks";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const login = useLogin();
    const register = useRegister();
    const logout = useLogout();
    const signInWithGoogle = useSignInWithGoogle();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(clientAuth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        // State
        currentUser,
        loading,
        isAuthenticated: !!currentUser,

        // hooks
        login,
        register,
        logout,
        signInWithGoogle,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
