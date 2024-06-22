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
import useAuthStore from '@/store/authStore.js';
// import useProfileStore from '@/store/ProfileStore';
// import useProfileStore from '@/store/ProfileStore.js';
import { useLocation } from 'react-router-dom';

const Profile = ({ id }) => {
  const passedId = localStorage.getItem('IDSearch');
  const authUser = useAuthStore((state) => state.user);
  const location = useLocation();
  const { isLoading, userProfile } = useGetUser(passedId);
  const daID = authUser.ID ? authUser.ID : authUser.InsertedID;
  const authUserID = typeof authUser === 'string' ? authUser : daID;
  const noSearch = passedId === null ? authUserID : passedId;

  const isVisitingOwnProfileFromLink =
    location.state?.isVisitingOwnProfile || false;
  const isVisitingOwnProfile =
    authUserID == noSearch || isVisitingOwnProfileFromLink;
  // console.log('🚀 ~ Profile ~ isVisitingOwnProfile:', isVisitingOwnProfile);

  const userNotFound = !isLoading && !userProfile;
  const theID = isVisitingOwnProfile ? authUserID : passedId;

  if (userNotFound) return <UserNotFound />;

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
      <GridItem
        area={'main'}
        className={
          'flex flex-col py-2 pl={{base: 4 md: 10}} w-full mx-auto grow'
        }
      >
        <div className={''}>
          {isLoading && <ProfileHeaderSkeleton />}
          {!isLoading && <Info user={theID} />}
        </div>
        <Tabs />
        <Posts id={theID} />
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
