import useShowToast from '@/hook/useShowToast.js';
import useAuthStore from '@/store/authStore.js';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { iniUser as iniUserEndpoint } from '@/services/theAPI.js';

const useSignUpwEmailPassword = () => {
  const showToast = useShowToast();
  const navigate = useNavigate();
  const loginUser = useAuthStore((state) => state.login);
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.username) {
      showToast('Error', 'Please fill in all fields', 'error');
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(
        'https://authentication-pf3yfmx32q-uc.a.run.app/user/signup',
        {
          Email: inputs.email,
          Password: inputs.password,
          First_name: inputs.username,
          Last_name: '..........',
          Phone_number: '',
          User_type: 'USER',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        const { InsertedID } = response.data;
        const signupData = { InsertedID, email: inputs.email };

        localStorage.setItem('InsertedID', InsertedID);
        loginUser(signupData);
        console.log('sign up data', signupData);
        await IniUser();
        window.location.reload();
      } else {
        showToast('Error', 'Signup failed', 'error');
      }
    } catch (error) {
      console.log('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const IniUser = async () => {
    try {
      const insertedID = localStorage.getItem('InsertedID');

      if (insertedID) {
        console.log('Retrieved InsertedID:', insertedID);
      } else {
        console.error('No InsertedID found in localStorage.');
        return;
      }

      console.log(inputs.email);
      console.log(inputs.username);

      const userResponse = await axios.post(
        iniUserEndpoint,
        {
          User: inputs.email,
          UserName: inputs.username,
          UserId: insertedID,
          usericon: {
            iconurl:
              'https://storage.googleapis.com/image-web-storage/445675328_1168866744564554_9070318082725663939_n.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=web-storage-service%40web-image-storage.iam.gserviceaccount.com%2F20240602%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240602T163229Z&X-Goog-Expires=899&X-Goog-Signature=aba51bc8effa904f835ac6c3645f4dddfb62f33337678ff03004f82192de9b564ec35b82a33a07559b9dc6986add9355090a2706e61dea936c641e6704192cf30f3bb330c54d64071bea75dbbfc97883260e93155dd8cd56d2575c7e519ae58e5249e3e21b8d9f6af796564e15f01f540b8b24eb5fc04dc2eac5814a7c22ca232cf9608703bb16494182b6cf17281ba69ef05bb881f36e1dc1686d874aec14c1a55eee073fb5efe663e5f1e916f9fbc636da7c0d32f2d3a7581dc42ead48bcb434b2264c57926eaadf9ca71d397e191f692cf86bdb6312fba646df90223573d9a3a9bb7ca893ed335819c9d98e17cdf5227b83d6cd16ac5c304ada6cca9ad069&X-Goog-SignedHeaders=host',
          },
          Post: [],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const userData = {
        ID: insertedID,
        first_name: inputs.username,
        email: inputs.email,
      };
      console.table('initiateUser data', userResponse.data);
      loginUser(userData); // Update the auth store with the user data
    } catch (error) {
      showToast('initiateUser failed', error.message, 'error');
    }
  };

  return { inputs, setInputs, signup, IniUser, loading };
};

export default useSignUpwEmailPassword;
