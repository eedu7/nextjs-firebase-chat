import { BlogCard } from "@/features/blog/components/blog-card";
import { BlogNavbar } from "@/features/blog/components/blog-navbar";

export const BlogPage = () => {
    return (
        <div className="mx-auto my-12 flex h-screen w-full max-w-7xl flex-col gap-4">
            <BlogNavbar />
            <div className="grid w-full flex-1 grid-cols-3 gap-4">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
};
