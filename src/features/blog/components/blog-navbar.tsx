"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { CreateBlogDialog } from "@/features/blog/components/create-blog-dialog";
import { useAuth } from "@/features/auth/context/auth-context";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

export const BlogNavbar = () => {
    const { currentUser } = useAuth();
    const { logout } = useAuth();
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {currentUser ? (
                    <div className="flex gap-2">
                        <NavigationMenuItem>
                            <Button
                                type="button"
                                variant="outline"
                                className={navigationMenuTriggerStyle()}
                                onClick={() => logout.mutate()}
                            >
                                {logout.isPending ? <Spinner /> : "Sign Out"}
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <CreateBlogDialog authorId={currentUser.uid} />
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link href="/dashboard">Dashboard</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link href="/auth/login">Sign in</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link href="/auth/register">Sign out</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </div>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
