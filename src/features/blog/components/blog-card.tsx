import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

export const BlogCard = () => {
    return (
        <Card className="border-border/40 w-full max-w-sm overflow-hidden rounded-2xl border transition-transform duration-200 hover:-translate-y-1">
            <CardContent className="p-0">
                <img
                    src="https://i.pinimg.com/1200x/ba/fd/94/bafd946215f34a1892b933a649c7605c.jpg"
                    alt="Tesla Cybertruck"
                    className="border-border/40 h-48 w-full border-b object-cover"
                />
            </CardContent>

            <CardHeader className="space-y-2 px-5 pt-5 pb-0">
                <span className="text-muted-foreground bg-muted border-border/40 inline-block rounded-full border px-3 py-1 text-[10px] font-medium tracking-widest uppercase">
                    Design
                </span>
                <h2 className="font-serif text-xl leading-snug tracking-tight">
                    Why is the Tesla Cybertruck designed the way it is?
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    An exploration into the truck&#39;s polarising design and
                    what it says about automotive aesthetics.
                </p>
            </CardHeader>

            <CardFooter className="border-border/40 mt-4 flex items-center justify-between border-t px-5 py-4">
                <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-medium text-blue-700">
                        CB
                    </div>
                    <div>
                        <p className="text-sm font-medium">Carrie Brewer</p>
                        <p className="text-muted-foreground text-xs">
                            2 hours ago
                        </p>
                    </div>
                </div>
                <span className="text-muted-foreground text-xs font-light">
                    5 min read
                </span>
            </CardFooter>
        </Card>
    );
};
