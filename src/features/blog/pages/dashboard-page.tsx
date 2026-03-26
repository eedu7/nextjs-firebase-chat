import { useGetBlogsByAuthorID } from "@/features/blog/hooks/use-blogs";
import { BlogCard } from "@/features/blog/components/blog-card";

interface Props {
    authorId: string;
}
export const DashboardPage = ({ authorId }: Props) => {
    const { data } = useGetBlogsByAuthorID(authorId);
    return (
        <div className="mx-auto my-12 h-screen w-full max-w-7xl">
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
        </div>
    );
};
