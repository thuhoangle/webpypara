import { useState } from 'react';
import useAuthStore from '@/store/authStore.js';
import useShowToast from '@/hook/useShowToast.js';
import axios from 'axios';

const useSavePost = (post) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const daID = authUser.ID ? authUser.ID : authUser.InsertedID;
  const authUserID = typeof authUser === 'string' ? authUser : daID;
  const [saves, setSaves] = useState(post.likes.length);
  const [isSaved, setIsSaved] = useState(false);
  const showToast = useShowToast();
  // const userId = localStorage.getItem('InsertedID');

  const handleSavePost = async (userId, postID) => {
    console.log('🚀 ~ handleSavePost ~ userId:', userId);
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
    console.log('🚀 ~ handleSavePost ~ data:', data);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://socialmedia-66ibb6pdga-uc.a.run.app/likePost/${authUserID}`,
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
        console.log('Error', error.message);
      });
  };

  return { isSaved, handleSavePost, isUpdating, saves, setSaves };
};

export default useSavePost;
