import { useEffect, useState } from 'react';
import useShowToast from '@/hook/useShowToast.js';
import useProfileStore from '@/store/ProfileStore.js';
import { getUser } from '../services/theAPI';

const useGetUser = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useProfileStore();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const response = await getUser(userId);
        // console.log('fetch user data response.data', response.data); // Log the data before setting it
        setUserProfile(response.data); // Directly setting the response data
      } catch (error) {
        showToast('fetch failed', error.message, 'error');
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [setUserProfile, userId, showToast]);

  // useEffect(() => {
  //   console.log('Updated userProfile', userProfile); // Log userProfile after it has been updated
  // }, [userProfile]);

  return { isLoading, userProfile };
};

export default useGetUser;
