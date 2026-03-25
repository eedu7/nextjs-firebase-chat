import { AuthCard } from "@/features/auth/components/auth-card";
import { RegisterForm } from "@/features/auth/components/register-form";

export async function RegisterPage() {
    return (
        <AuthCard
            title="Register"
            description="Register a new user"
            children={<RegisterForm />}
        />
    );
}
