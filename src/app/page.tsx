"use client";
import { useAuth } from "@/features/auth/context/auth-context";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LogoutButton } from "@/features/auth/components/logout-button";

export default function Page() {
    const { currentUser } = useAuth();
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <Card className="w-md max-w-lg">
                <CardHeader>
                    <CardTitle></CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                    {JSON.stringify(
                        {
                            email: currentUser?.email,
                            uid: currentUser?.uid,
                        },
                        null,
                        2,
                    )}
                </CardContent>
                <CardFooter>
                    <LogoutButton />
                </CardFooter>
            </Card>
        </div>
    );
}
