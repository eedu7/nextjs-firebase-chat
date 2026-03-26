"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { CreateBlogDialog } from "@/features/blog/components/create-blog-dialog";
import { useAuth } from "@/features/auth/context/auth-context";

export const BlogNavbar = () => {
    const { currentUser } = useAuth();
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {currentUser && (
                    <>
                        <NavigationMenuItem>
                            <Button
                                type="button"
                                variant="outline"
                                className={navigationMenuTriggerStyle()}
                            >
                                SignOut
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <CreateBlogDialog authorId={currentUser.uid} />
                        </NavigationMenuItem>
                    </>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
