"use client";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useSignInWithGoogle } from "@/features/auth/hooks/use-auth";

export const SocialLogin = () => {
    const signInWithGoogle = useSignInWithGoogle();
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
