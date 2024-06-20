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
        // console.log('🚀 ~ getUserProfile ~ response:', response.data[0]);
        setUserProfile(response.data[0]);
      } catch (error) {
        console.log('fetch failed', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [setUserProfile, userId, showToast]);

  return { isLoading, userProfile };
};

export default useGetUser;
