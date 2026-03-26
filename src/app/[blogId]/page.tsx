import { BlogIDPage } from "@/features/blog/pages/blog-id-page";

interface Props {
    params: Promise<{ blogId: string }>;
}
export default async function Page({ params }: Props) {
    const { blogId } = await params;
    return <BlogIDPage uid={blogId} />;
}
