import { Timestamp } from "firebase/firestore";

export interface Blog {
    title: string;
    description: string;
    content: string;
    authorId: string;
    published: boolean;
    createdAt: Timestamp;
    updatedAt?: Timestamp;
}
