"use client";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/features/auth/hooks/use-auth";
import { Spinner } from "@/components/ui/spinner";

export const LogoutButton = () => {
    const logout = useLogout();
    return (
        <Button onClick={() => logout.mutate()} disabled={logout.isPending}>
            {logout.isPending ? <Spinner /> : "Logout"}
        </Button>
    );
};
