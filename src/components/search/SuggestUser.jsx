import { Avatar, Box, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useAuthStore from '@/store/authStore.js';

const SuggestUser = ({ user }) => {
  const authUser = useAuthStore((state) => state.user);
  const handleUserClick = () => {
    localStorage.setItem('IDSearch', user?.id);
    localStorage.setItem('userSearch', user?.username);
    // console.log('🚀🚀🚀🚀🚀🚀🚀 ~ userSearch', user.username);
  };

  return (
    <>
      <Link to={`/${user?.username}`} onClick={handleUserClick}>
        <Flex className={'justify-between items-center w-screen px-4 mb-2'}>
          <Flex alignItems={'center'} gap={2}>
            <Avatar src={user?.usericon?.iconurl} size={'md'} />
            <Box className={'font-bold text-base'}>{user?.username}</Box>
          </Flex>
          {authUser !== user._id && (
            <Button
              className={
                'text-base bg-transparent h-max text-blue-400 hover:text-gray-800'
              }
            >
              Go to page
            </Button>
          )}
        </Flex>
      </Link>
      <hr className={'fill-gray-300'} />
    </>
  );
};

export default SuggestUser;
