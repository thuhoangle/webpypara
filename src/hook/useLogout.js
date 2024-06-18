import useShowToast from '@/hook/useShowToast.js';
import useAuthStore from '@/store/authStore.js';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const navigate = useNavigate();
  const showToast = useShowToast();
  const logoutUser = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      localStorage.removeItem('email');
      logoutUser();
      navigate('/auth');
      // showToast('Success', 'You have successfully logged out', 'success')
    } catch (error) {
      showToast('Error', error.message, 'error');
    }
  };
  return { handleLogout };
};
export default useLogout;
