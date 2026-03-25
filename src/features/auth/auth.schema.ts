import { z } from "zod";

export const userRegisterSchema = z.object({
    email: z.email(),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[0-9]/, "Password must contain at least one number.")
        .regex(
            /[^A-Za-z0-9]/,
            "Password must contain at least one special character.",
        ),
});

export const userLoginSchema = z.object({
    email: z.email(),
    password: z.string(),
});

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>;
export type UserLoginSchema = z.infer<typeof userLoginSchema>;
