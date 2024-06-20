import React, { useState } from 'react';
import useShowToast from '@/hook/useShowToast.js';
import { searchUser } from '@/services/theAPI.js';
import useProfileStore from '@/store/ProfileStore.js';

const useSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  // const { userProfile, setUserProfile } = useProfileStore();
  const showToast = useShowToast();

  const getUserProfile = async (username) => {
    setIsLoading(true);
    try {
      const response = await searchUser(username);
      if (response.data && response.data.length > 0) {
        const user = response.data;
        // console.log('🚀🚀🚀🚀🚀🚀🚀 ~ getUserProfile ~ data:', response.data);

        // console.log('🚀##### ~ getUserProfile ~ user:', user.id);

        // localStorage.setItem('IDSearch', user.id);
        setUser(user);
        // setUserProfile(user);
      } else {
        showToast('Error', 'User not found', 'error');
        // setUserProfile(null);
        setUser(null);
      }
    } catch (error) {
      showToast(
        'Error',
        error.message || 'Failed to fetch user profile',
        'error'
      );
      // setUserProfile(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, user, getUserProfile };
};

export default useSearch;
