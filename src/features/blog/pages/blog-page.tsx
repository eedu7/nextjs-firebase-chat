import { BlogCard } from "@/features/blog/components/blog-card";

export const BlogPage = () => {
    return (
        <div className="mx-auto my-12 h-screen w-full max-w-7xl">
            <div className="grid w-full grid-cols-3 gap-4">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
};
