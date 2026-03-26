import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    uid: string;
}

export const BlogCard = ({ title, description, uid }: Props) => {
    return (
        <Link href={`/blog/${uid}`}>
            <Card className="border-border/40 h-full w-full max-w-sm overflow-hidden rounded-2xl border transition-transform duration-200 hover:-translate-y-1">
                <CardHeader className="space-y-2 px-5 pt-5 pb-0">
                    <h2 className="font-serif text-xl leading-snug tracking-tight">
                        {title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        {description}
                    </p>
                </CardHeader>
            </Card>
        </Link>
    );
};
