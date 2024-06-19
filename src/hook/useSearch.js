import React, { useState } from 'react';
import useShowToast from '@/hook/useShowToast.js';
import { searchUser } from '@/services/theAPI.js';

const useSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();

  const getUserProfile = async (username) => {
    setIsLoading(true);
    try {
      const response = await searchUser(username);
      console.log('🚀🚀🚀🚀 ~ getUserProfile ~ response:', response.data[0]);
      if (response.data && response.data.length > 0) {
        setUser(response.data[0]);
      } else {
        showToast('Error', 'User not found', 'error');
        setUser(null);
      }
    } catch (error) {
      showToast(
        'Error',
        error.message || 'Failed to fetch user profile',
        'error'
      );
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, user, getUserProfile };
};

export default useSearch;
