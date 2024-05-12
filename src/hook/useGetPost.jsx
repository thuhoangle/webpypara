import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import useShowToast from "@/hook/useShowToast.js";
import useProfileStore from "@/store/ProfileStore.js";
import {firestore} from "@/firebase/firebase.js";
import usePostStore from "@/store/postStore.js";

const useGetPost = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { posts, setPosts } = usePostStore();
    const showToast = useShowToast();
    const userProfile = useProfileStore((state) => state.userProfile);

    useEffect(() => {
        const getPosts = async () => {
            if (!userProfile) return;
            setIsLoading(true);
            setPosts([]);

            try {
                const q = query(collection(firestore, "posts"), where("createdBy", "==", userProfile.uid));
                const querySnapshot = await getDocs(q);

                const posts = [];
                querySnapshot.forEach((doc) => {
                    posts.push({ ...doc.data(), id: doc.id });
                });

                posts.sort((a, b) => b.createdAt - a.createdAt);
                setPosts(posts);
            } catch (error) {
                showToast("Error", error.message, "error");
                setPosts([]);
            } finally {
                setIsLoading(false);
            }
        };

        getPosts();
    }, [setPosts, userProfile, showToast]);

    return { isLoading, posts };
};

export default useGetPost;