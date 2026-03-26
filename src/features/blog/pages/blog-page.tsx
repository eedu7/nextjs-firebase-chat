import { BlogNavbar } from "@/features/blog/components/blog-navbar";
import { BlogCollection } from "@/features/blog/components/blog-collection";

export const BlogPage = () => {
    return (
        <div className="mx-auto my-12 h-screen w-full max-w-7xl space-y-12">
            <BlogNavbar />
            <div className="flex-1">
                <BlogCollection />
            </div>
        </div>
    );
};
