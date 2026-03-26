"use client";
import { useAuth } from "@/features/auth/context/auth-context";
import { useRouter } from "next/navigation";
import { DashboardPage } from "@/features/blog/pages/dashboard-page";

export default function Page() {
    const { currentUser } = useAuth();
    const router = useRouter();

    if (currentUser) {
        return <DashboardPage authorId={currentUser.uid} />;
    } else {
        router.replace("/login");
    }
}
