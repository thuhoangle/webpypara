import DropdownMenu from '@/components/DropdownMenu.jsx';
import {
  Flex,
  Grid,
  GridItem,
  Skeleton,
  SkeletonCircle,
  VStack,
  Link,
  Text,
} from '@chakra-ui/react';
import Info from '@/components/profile/Info.jsx';
import Tabs from '@/components/profile/Tabs.jsx';
// import useGetUserProfileByUsername from "@/hook/useGetProfileByUsername.js";
// import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import CreatePost from '@/components/CreatePost.jsx';
import Posts from '@/components/profile/Posts.jsx';
import useGetUser from '@/hook/useGetUser.js';
// import useAuthStore from '@/store/authStore.js';
// import useProfileStore from '@/store/ProfileStore.js';

const Profile = () => {
  // const authUser = useAuthStore((state) => state.user);
  const id = localStorage.getItem('ID');
  // console.log('🚀 ~ Profile ~ iddd:', id);

  // const { userId: userIdFromParams } = useParams();
  // const userId = localStorage.getItem('InsertedID') || userIdFromParams;
  const { isLoading, userProfile } = useGetUser(id);
  console.log('🚀!!!! ~ Profile ~ userProfile:', userProfile);

  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <UserNotFound />;

  // templateColumns='200px auto 200px'
  return (
    <Grid
      templateAreas={`"sidebar1 main sidebar2"`}
      className={
        'w-screen overflow-auto h-screen grid-cols-[minmax(0,_13rem)_auto_minmax(0,_13rem)] '
      }
    >
      <GridItem
        bg="orange.300"
        area={'sidebar1'}
        display={{ base: 'none', md: 'block' }}
        className={'overflow-x-hidden'}
      ></GridItem>
      {/*<GridItem area={'main'} className={'py-2 w-full grow'}>*/}
      <GridItem
        area={'main'}
        className={
          'flex flex-col py-2 pl={{base: 4 md: 10}} w-full mx-auto grow'
        }
      >
        <div className={''}>
          {/*user exists*/}
          {!isLoading && userProfile && <Info />}
          {isLoading && <ProfileHeaderSkeleton />}
        </div>
        <Tabs />
        <Posts />
      </GridItem>
      <GridItem
        pr="2"
        bg="green.300"
        area={'sidebar2'}
        display={{ base: 'none', md: 'block' }}
        className={''}
      >
        <div className={''}>
          <DropdownMenu />
        </div>
        <div className={'fixed bottom-8 right-10'}>
          <CreatePost />
        </div>
      </GridItem>
    </Grid>
  );
};
export default Profile;

const UserNotFound = () => {
  return (
    <Flex
      className={
        'flex-col overflow-auto h-screen items-center justify-center text-center mx-auto'
      }
    >
      <Text fontSize={'2xl'}>User not found</Text>
      <Link
        as={RouterLink}
        to={'/'}
        className={'w-max mx-auto hover:active:no-underline'}
      >
        Back to <span className={'text-blue-500'}>Home</span>
      </Link>
    </Flex>
  );
};

// skeleton for profile header
const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <SkeletonCircle size="24" />

      <VStack
        alignItems={{ base: 'center', sm: 'flex-start' }}
        gap={2}
        mx={'auto'}
        flex={1}
      >
        <Skeleton height="12px" width="150px" />
        <Skeleton height="12px" width="100px" />
      </VStack>
    </Flex>
  );
};
