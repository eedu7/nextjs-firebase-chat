"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/features/auth/context/auth-context";

export const LogoutButton = () => {
    const { logout } = useAuth();
    return (
        <Button onClick={() => logout.mutate()} disabled={logout.isPending}>
            {logout.isPending ? <Spinner /> : "Logout"}
        </Button>
    );
};
