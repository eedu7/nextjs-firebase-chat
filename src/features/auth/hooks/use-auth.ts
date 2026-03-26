import { useMutation } from "@tanstack/react-query";
import {
    UserLoginSchema,
    UserRegisterSchema,
} from "@/features/auth/auth.schema";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    User,
} from "@firebase/auth";
import { googleProvider } from "@/lib/firebase/providers";
import { useRouter } from "next/navigation";
import { clientAuth } from "@/lib/firebase/client";

export function useRegister() {
    const router = useRouter();
    return useMutation<User, Error, UserRegisterSchema>({
        mutationKey: ["use-register", "use-auth", "authentication"],
        mutationFn: async ({ email, password }): Promise<User> => {
            try {
                const userCredentials = await createUserWithEmailAndPassword(
                    clientAuth,
                    email,
                    password,
                );
                return userCredentials.user;
            } catch (error) {
                throw new Error(
                    // @ts-ignore
                    error?.message ?? "An unknown error has occurred.",
                );
            }
        },
        onSuccess: () => {
            router.push("/");
        },
    });
}

export const useLogin = () => {
    const router = useRouter();
    return useMutation<User, Error, UserLoginSchema>({
        mutationKey: ["use-login", "use-auth", "authentication"],
        mutationFn: async ({ email, password }) => {
            try {
                const userCredentials = await signInWithEmailAndPassword(
                    clientAuth,
                    email,
                    password,
                );
                return userCredentials.user;
            } catch (error) {
                throw new Error(
                    // @ts-expect-error
                    error?.message ?? "An unknown error has occurred.",
                );
            }
        },
        onSuccess: (data) => {
            router.push("/");
        },
    });
};

export const useSignInWithGoogle = () => {
    return useMutation({
        mutationKey: [
            "use-google-social-provider",
            "use-auth",
            "authentication",
        ],
        mutationFn: async () => {
            try {
                const userCredentials = await signInWithPopup(
                    clientAuth,
                    googleProvider,
                );
                return userCredentials.user;
            } catch (error) {
                throw new Error(
                    // @ts-expect-error
                    error?.message ?? "An unknown error has occurred.",
                );
            }
        },
    });
};

export const useLogout = () => {
    return useMutation({
        mutationKey: ["use-logout", "use-auth", "authentication"],
        mutationFn: async () => {
            try {
                signOut(clientAuth);
            } catch (error) {
                // @ts-expect-error
                error?.message ?? "An unknown error has occurred.";
            }
        },
    });
};
