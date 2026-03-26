import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    updateDoc,
    where
} from "@firebase/firestore";
import { clientDb } from "@/lib/firebase/client";
import { Blog } from "@/features/blog/blog.types";

export async function createBlog(data: Omit<Blog, "createdAt">) {
    const docRef = await addDoc(collection(clientDb, "blog"), {
        createdAt: serverTimestamp(),
        ...data,
    });
    return docRef.id;
}

export async function getBlogs(): Promise<(Blog & { id: string })[]> {
    const snapshot = await getDocs(collection(clientDb, "blog"));

    return snapshot.docs.map((snap) => ({
        id: snap.id,
        ...(snap.data() as Blog),
    }));
}

export async function getBlogByID(
    id: string,
): Promise<(Blog & { id: string }) | null> {
    const docRef = doc(clientDb, "blog", id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) return null;

    return {
        id: snapshot.id,
        ...(snapshot.data() as Blog),
    };
}

export async function updateBlog(
    id: string,
    data: Partial<Omit<Blog, "createdAt">>,
) {
    const docRef = doc(clientDb, "blog", id);
    await updateDoc(docRef, {
        ...data,
        updatedAt: serverTimestamp(),
    });
    return true;
}

export async function deleteBlog(id: string) {
    const docRef = doc(clientDb, "blog", id);
    await deleteDoc(docRef);
    return true;
}

export async function getBlogsByAuthorId(
    authorId: string,
): Promise<(Blog & { id: string })[]> {
    const q = query(
        collection(clientDb, "blog"),
        where("authorId", "==", authorId),
    );
    const snapshot = await getDocs(q);

    return snapshot.docs.map((snap) => ({
        id: snap.id,
        ...(snap.data() as Blog),
    }));
}
