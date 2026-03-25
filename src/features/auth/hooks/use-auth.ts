import { useMutation } from "@tanstack/react-query";
import { UserLoginSchema, UserRegisterSchema } from "@/features/auth/auth.schema";

export function useAuth() {
    const register = useMutation<void, Error, UserRegisterSchema>({
        mutationKey: ["use-register", "use-auth", "authentication"],
        mutationFn: async (data) => {},
    });

    const login = useMutation<void, Error, UserLoginSchema>({
        mutationKey: ["use-login", "use-auth", "authentication"],
        mutationFn: async (data) => {},
    });

    return {
        register,
        login,
    };
}
