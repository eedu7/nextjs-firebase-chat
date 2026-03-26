"use client";

import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/context/auth-context";

export const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <Field orientation="horizontal">
            <Button
                onClick={() => signInWithGoogle.mutate()}
                disabled={signInWithGoogle.isPending}
                variant="outline"
            >
                Sign in with Google
            </Button>
        </Field>
    );
};
