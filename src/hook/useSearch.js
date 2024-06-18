import React, { useState } from 'react';
import axios from 'axios';
import useShowToast from '@/hook/useShowToast.js';
import { getUser } from '@/services/theAPI.js';

const useSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();

  const getUserProfile = async (userId) => {
    setIsLoading(true);
    try {
      // Replace with your actual API endpoint
      const response = await getUser(userId);
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
