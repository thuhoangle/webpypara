import { useState } from "react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import useAuthStore from "@/store/authStore.js";
import useShowToast from "@/hook/useShowToast.js";
import {firestore} from "@/firebase/firebase.js";

const useSavePost = (post) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    // const [saves, setSaves] = useState(post.saves.length);
    const [isSaved, setIsSaved] = useState(false);
    const showToast = useShowToast();

    const handleSavePost = async () => {
        if (isUpdating) return;
        if (!authUser) return showToast("Error", "You must be logged in to save a post", "error");
        setIsUpdating(true);

        try {
            const postRef = doc(firestore, "posts", post.id);
            await updateDoc(postRef, {
                saves: isSaved ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
            });

            setIsSaved(!isSaved);
            // isSaved ? setSaves(saves - 1) : setSaves(saves + 1);
        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            setIsUpdating(false);
        }
    };

    return { isSaved, handleSavePost, isUpdating };
};

export default useSavePost;