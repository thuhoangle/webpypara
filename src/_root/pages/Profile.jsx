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
  // const authUser = useAuthStore((state) => state.user);
  // const id = localStorage.getItem('IDSearch');
  // console.log('🚀 ~ Profile ~ id:', id);
  // // const { userProfile } = useProfileStore;

  // const { isLoading, userProfile } = useGetUser(id);
  // console.log('🚀 ~ Profile ~ userProfile:', userProfile);

  // // const visitingOwnProfileAndAuth = authUser && authUser === userProfile[0]._id;
  // // const visitingAnotherProfileAndAuth =
  // //   authUser && authUser !== userProfile[0]._id;
  // const visitingOwnProfileAndAuth = authUser && authUser === id;
  // const visitingAnotherProfileAndAuth = authUser && authUser !== id;

  // const userNotFound = !isLoading && !userProfile;
  // if (userNotFound) return <UserNotFound />;

  const location = useLocation();
  const passedId = location.state?.id || id;

  const authUser = useAuthStore((state) => state.user);
  console.log('🚀 ~ Profile ~ authUser:', authUser);
  console.log('🚀 ~ Profile#### ~ id:', passedId);

  const { isLoading, userProfile } = useGetUser(passedId);
  // console.log('🚀 ~ Profile^^^^^ ~ userProfile:', userProfile[0]._id);

  const isVisitingOwnProfile = authUser === passedId;
  console.log('🚀 ~ Profile ~ isVisitingOwnProfile:', isVisitingOwnProfile);
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
          {isLoading && <ProfileHeaderSkeleton />}
          {/*user exists*/}
          {/* {!isLoading && visitingOwnProfileAndAuth && (
            <Info userProfile={userProfile[0]} />
          )} */}

          {!isLoading && (
            // <Info user={isVisitingOwnProfile ? authUser : userProfile[0]._id} />
            <Info user={isVisitingOwnProfile ? authUser : passedId} />
          )}
          {/* {!isLoading && userProfile && <Info />} */}
        </div>
        <Tabs />
        {/* <Posts id={isVisitingOwnProfile ? authUser : userProfile[0]._id} /> */}

        <Posts id={isVisitingOwnProfile ? authUser : passedId} />

        {/* <Posts posts={userProfile[0].post} /> */}
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
