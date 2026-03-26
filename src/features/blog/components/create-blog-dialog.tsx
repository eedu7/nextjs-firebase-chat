"use client";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FieldGroup, FieldSet } from "@/components/ui/field";
import { useAppForm } from "@/hooks/form";
import { useCreateBlog } from "@/features/blog/hooks/use-blogs";

export const CreateBlogDialog = ({ authorId }: { authorId: string }) => {
    const createBlog = useCreateBlog();
    const form = useAppForm({
        defaultValues: {
            title: "",
            description: "",
            content: "",
        },
        onSubmit: ({ value }) => {
            createBlog.mutate({
                ...value,
                published: true,
                authorId: authorId,
            });
        },
    });
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Blog</Button>
            </DialogTrigger>
            <DialogContent className="w-md max-w-lg sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Create New Blog</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        form.handleSubmit();
                    }}
                >
                    <FieldGroup>
                        <FieldSet>
                            <form.AppField
                                name="title"
                                children={(field) => (
                                    <field.TextField
                                        label="Title"
                                        name="email"
                                        required
                                    />
                                )}
                            />
                        </FieldSet>
                        <FieldSet>
                            <form.AppField
                                name="description"
                                children={(field) => (
                                    <field.TextField
                                        label="Description"
                                        name="description"
                                        required
                                    />
                                )}
                            />
                        </FieldSet>
                        <FieldSet>
                            <form.AppField
                                name="content"
                                children={(field) => (
                                    <field.TextField
                                        label="Content"
                                        name="content"
                                        required
                                    />
                                )}
                            />
                        </FieldSet>
                    </FieldGroup>
                    <DialogFooter className="gap-2">
                        <DialogClose>Cancel</DialogClose>
                        <form.AppForm>
                            <form.SubmitButton
                                label="Create Blog"
                                isPending={createBlog.isPending}
                            />
                        </form.AppForm>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};
