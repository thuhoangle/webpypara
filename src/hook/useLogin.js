import useShowToast from '@/hook/useShowToast.js';
import useAuthStore from '@/store/authStore.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const useLogin = () => {
  const navigate = useNavigate();
  const showToast = useShowToast();
  const [loading, setLoading] = useState(false);
  const loginUser = useAuthStore((state) => state.login);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const login = async (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      return showToast('Error', 'Please fill in all fields', 'error');
    }
    setLoading(true);

    try {
      const res = await axios.post(
        'https://authentication-pf3yfmx32q-uc.a.run.app/user/login',
        {
          email: inputs.email,
          password: inputs.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (res.status === 200) {
        console.table(res.data);
        const { ID, first_name, email } = res.data;
        const userData = {
          ID,
          first_name,
          email,
        };
        // const email = res.data;
        localStorage.setItem('email', email);
        localStorage.setItem('ID', ID);
        localStorage.setItem('username', first_name);

        loginUser(userData); // Update the auth store with the user data
        console.log('🚀 ~ login ~ userData:', userData);

        navigate('/');
      } else {
        showToast('Error', '"Login failed"', 'error');
      }
    } catch (error) {
      showToast('Login failed', 'Email or password is incorrect', 'error');
    } finally {
      setLoading(false);
    }
  };
  // return {loading, error, login}
  return { inputs, setInputs, loading, login };
};
export default useLogin;
