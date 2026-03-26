import { useMutation } from "@tanstack/react-query";
import {
    UserLoginSchema,
    UserRegisterSchema,
} from "@/features/auth/auth.schema";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    User,
} from "@firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export function useAuth() {
    const router = useRouter();
    const register = useMutation<User, Error, UserRegisterSchema>({
        mutationKey: ["use-register", "use-auth", "authentication"],
        mutationFn: async ({ email, password }): Promise<User> => {
            try {
                const userCredentials = await createUserWithEmailAndPassword(
                    auth,
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
        onSuccess: (data) => {
            router.push("/");
        },
    });

    const login = useMutation<User, Error, UserLoginSchema>({
        mutationKey: ["use-login", "use-auth", "authentication"],
        mutationFn: async ({ email, password }) => {
            try {
                const userCredentials = await signInWithEmailAndPassword(
                    auth,
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
        onSuccess: (data) => {
            router.push("/");
        },
    });

    const signInWithGoogle = useMutation({
        mutationKey: [
            "use-google-social-provider",
            "use-auth",
            "authentication",
        ],
        mutationFn: async () => {
            try {
                const userCredentials = await signInWithPopup(
                    auth,
                    googleProvider,
                );
                return userCredentials.user;
            } catch (error) {
                throw new Error(
                    // @ts-ignore
                    error?.message ?? "An unknown error has occurred.",
                );
            }
        },
    });

    return {
        register,
        login,
        signInWithGoogle,
    };
}
