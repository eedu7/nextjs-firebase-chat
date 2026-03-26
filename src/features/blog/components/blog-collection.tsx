"use client";

import { useGetBlogs } from "@/features/blog/hooks/use-blogs";
import { BlogCard } from "@/features/blog/components/blog-card";

export const BlogCollection = () => {
    const { data } = useGetBlogs();
    return (
        <div className="grid grid-cols-3 gap-4">
            {data?.map((blog) => (
                <BlogCard
                    key={blog.id}
                    title={blog.title}
                    description={blog.description}
                    uid={blog.id}
                />
            ))}
        </div>
    );
};
