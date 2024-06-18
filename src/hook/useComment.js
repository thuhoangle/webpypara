import { useState } from 'react';
import useShowToast from '@/hook/useShowToast.js';
import useAuthStore from '@/store/authStore.js';
import useProfileStore from '@/store/ProfileStore.js';
import axios from 'axios';

const useComment = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const showToast = useShowToast();
  const authUser = useAuthStore((state) => state.user);
  // const userProfile = usePostStore((state) => state.userProfile);
  //   const addComment = usePostStore((state) => state.addComment);
  //   const PostID = localStorage.getItem('PostID');
  const { userProfile } = useProfileStore();
  // console.log('🚀 ~ useComment ~ userProfile:', userProfile[0]._id);
  const id = localStorage.getItem('ID');
  // console.log('🚀 ~ useComment ~ id:', id);
  const username = localStorage.getItem('username');

  const handlePostComment = async (PostID, comment) => {
    if (isCommenting) return;
    if (!authUser)
      return showToast('Error', 'You must be logged in to comment', 'error');
    setIsCommenting(true);
    const data = {
      PostID: PostID,
      OwnerPost: userProfile[0]._id,
      UserName: username,
      Text: comment,
    };
    console.log('🚀 ~ handlePostComment ~ data:', data);
    try {
      await axios.post(
        `https://socialmedia-66ibb6pdga-uc.a.run.app/commentPost/${id}`,
        // {
        //   Text: comment,
        //   UserName: username,
        //   OwnerPost: authUser.ID,
        //   PostID: PostID,
        // },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
        }
      );

      console.table('🚀 ~ handlePostComment ~ data:', data);
      showToast('Success', 'Comment posted successfully', 'success');
      //   await response(doc(firestore, 'posts', postId), {
      //     comments: arrayUnion(newComment),
      //   });
      //   addComment(postId, newComment);
    } catch (error) {
      showToast('Error', error.message, 'error');
    } finally {
      setIsCommenting(false);
    }
  };

  return { isCommenting, handlePostComment };
};

export default useComment;
