"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "@firebase/auth";
import { clientAuth } from "@/lib/firebase/client";
import { AuthContext } from "../context/auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

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
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
