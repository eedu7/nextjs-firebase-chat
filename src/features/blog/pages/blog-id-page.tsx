"use client";

import { useGetBlogByID } from "@/features/blog/hooks/use-blogs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export const BlogIDPage = ({ uid }: { uid: string }) => {
    const { data } = useGetBlogByID(uid);
    if (!data) return null;
    return (
        <article className="mx-auto max-w-3xl px-6 py-16">
            <header className="mb-8 space-y-5">
                <div className="flex items-center gap-2">
                    <Badge
                        variant={data.published ? "default" : "secondary"}
                        className="rounded-full text-xs font-medium"
                    >
                        {data.published ? "Published" : "Draft"}
                    </Badge>
                </div>

                <h1 className="text-foreground text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl">
                    {data.title}
                </h1>

                <p className="text-muted-foreground text-lg leading-relaxed">
                    {data.description}
                </p>

                <p className="leading-relaxed">{data.content}</p>
            </header>

            <Separator className="mb-8" />

            <div className="mb-10 flex items-center gap-3">
                <div>
                    <p className="text-foreground text-sm leading-tight font-medium">
                        Author
                    </p>
                    <p className="text-muted-foreground font-mono text-xs">
                        {data.authorId}
                    </p>
                </div>
            </div>

            <Separator className="mb-10" />

            <div className="prose prose-neutral dark:prose-invert prose-lg prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-blockquote:border-l-primary/40 prose-blockquote:text-muted-foreground prose-img:rounded-xl max-w-none" />
        </article>
    );
};
