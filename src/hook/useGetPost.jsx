import { useEffect, useState } from 'react';
// import { getUser } from '../services/theAPI';
import useShowToast from '@/hook/useShowToast.js';
import useProfileStore from '@/store/ProfileStore.js';
import usePostStore from '@/store/postStore.js';

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
        // const response = await getUser(userId);
        const posts = userProfile[0].post;
        posts.sort((a, b) => {
          // Convert strings to Date objects
          const dateA = new Date(a.postdate);
          const dateB = new Date(b.postdate);

          // Sort in descending order (latest first)
          return dateB - dateA;
        });
        setPosts(posts);
      } catch (error) {
        showToast('Error', error.message, 'error');
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
