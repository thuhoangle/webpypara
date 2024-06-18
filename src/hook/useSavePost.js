import { useState } from 'react';
import useAuthStore from '@/store/authStore.js';
import useShowToast from '@/hook/useShowToast.js';
import axios from 'axios';

const useSavePost = (post) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const [saves, setSaves] = useState(post.likes.length);
  const [isSaved, setIsSaved] = useState(false);
  const showToast = useShowToast();
  // const userId = localStorage.getItem('InsertedID');

  const handleSavePost = async (userId, postID) => {
    if (isUpdating) return;
    if (!authUser)
      return showToast(
        'Error',
        'You must be logged in to save a post',
        'error'
      );
    setIsUpdating(true);

    let data = JSON.stringify({
      UserId: userId,
      PostID: postID,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://socialmedia-66ibb6pdga-uc.a.run.app/likePost/${authUser}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setIsSaved(!isSaved);
        setIsUpdating(false);
        setSaves(saves + 1);
      })
      .catch((error) => {
        showToast('Error', error.message, 'error');
      });
  };

  return { isSaved, handleSavePost, isUpdating, saves, setSaves };
};

export default useSavePost;
