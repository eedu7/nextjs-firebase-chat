import { Timestamp } from "firebase/firestore";

export type Blog = {
    title: string;
    description: string;
    content: string;
    authorId: string;
    published: boolean;
    createdAt: Timestamp;
    updatedAt?: Timestamp;
};

export type BlogWithId = Blog & {
    id: string;
};
