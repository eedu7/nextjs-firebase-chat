import { AuthCard } from "@/features/auth/components/auth-card";
import { LoginForm } from "@/features/auth/components/login-form";

export async function LoginPage() {
    return (
        <AuthCard
            title="Login"
            description="Login to your account"
            children={<LoginForm />}
        />
    );
}
