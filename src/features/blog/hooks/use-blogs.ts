"use client";

import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { Blog, BlogWithId } from "@/features/blog/blog.types";
import {
    createBlog,
    deleteBlog,
    getBlogByID,
    getBlogs,
    getBlogsByAuthorId,
    updateBlog
} from "@/features/blog/blog.client";

export function useGetBlogs(): UseQueryResult<BlogWithId[], Error> {
    return useQuery({
        queryKey: ["blogs", "use-blogs"],
        queryFn: getBlogs,
    });
}

export function useGetBlogByID(
    id: string,
): UseQueryResult<BlogWithId | null, Error> {
    return useQuery({
        queryKey: ["blogs", "use-blog", "use-get-blog-by-id", id],
        queryFn: () => getBlogByID(id),
        enabled: !!id,
    });
}

export function useGetBlogsByAuthorID(
    id: string,
): UseQueryResult<BlogWithId[], Error> {
    return useQuery({
        queryKey: ["blogs", "use-blogs", "author", id],
        queryFn: () => getBlogsByAuthorId(id),
        enabled: !!id,
    });
}

export function useCreateBlog(): UseMutationResult<
    string,
    Error,
    Omit<Blog, "createdAt" | "updatedAt">
> {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["use-create-blog", "use-blog"],
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
        },
    });
}

export function useUpdateBlog(): UseMutationResult<
    boolean,
    Error,
    { id: string; data: Partial<Omit<Blog, "createdAt">> }
> {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => updateBlog(id, data),
        onSuccess: (_result, { id }) => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            queryClient.invalidateQueries({ queryKey: ["blogs", id] });
        },
    });
}

export function useDeleteBlog(): UseMutationResult<boolean, Error, string> {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["use-delete-blog", "use-blog"],
        mutationFn: deleteBlog,
        onSuccess: (_result, id) => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            queryClient.removeQueries({ queryKey: ["blogs", id] });
        },
    });
}
