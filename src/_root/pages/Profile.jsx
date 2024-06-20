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
  const passedId = localStorage.getItem('IDSearch');
  const authUser = useAuthStore((state) => state.user);
  const location = useLocation();

  // console.log('🚀 ~ Profile ~ passedId:', passedId);
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

  // const location = useLocation();
  // const passedId = location.state?.id || id;

  const noSearch =
    passedId === null
      ? typeof authUser === 'string'
        ? authUser
        : authUser.ID
      : passedId;
  const { isLoading, userProfile } = useGetUser(passedId);
  console.log('🚀 ~ Profile ~ noSearch:', noSearch);

  // console.log('🚀 ~ Profile ~ authUser:', authUser.ID);
  console.log('🚀 ~ Profile ~ authUser:', authUser);

  // const { isLoading, userProfile } = useGetUser(
  //   typeof passedId === 'string' ? passedId : passedId.ID
  // );

  const authUserID = typeof authUser === 'string' ? authUser : authUser.ID;
  // const isVisitingOwnProfile = authUserID == noSearch;
  const isVisitingOwnProfileFromLink =
    location.state?.isVisitingOwnProfile || false;
  const isVisitingOwnProfile =
    authUserID == noSearch || isVisitingOwnProfileFromLink;

  // (authUser && authUser.ID) === (passedId && passedId.ID);
  // (typeof authUser === 'string' ? authUser : authUser.ID) == passedId;

  console.log('🚀 ~ Profile ~ isVisitingOwnProfile:', isVisitingOwnProfile);

  // (authUser && authUser.ID) === (passedId && passedId.ID);

  // (typeof authUser === 'string' ? authUser : authUser.ID)
  // (typeof passedId === 'string' ? passedId : passedId.ID);

  // console.log('🚀 ~ Profile ~ isVisitingOwnProfile:', isVisitingOwnProfile);
  const userNotFound = !isLoading && !userProfile;
  const theID = isVisitingOwnProfile
    ? authUserID
    : // typeof authUser === 'string'
      //   ? authUser
      //   : authUser.ID
      passedId;

  if (theID === authUserID) {
    console.log('t lam dun');
  }

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
          {!isLoading && (
            <Info user={theID} />

            // <Info user={isVisitingOwnProfile ? authUser : passedId} />

            // <Info
            //   user={
            //     isVisitingOwnProfile
            //       ? authUser
            //       : // typeof authUser === 'string'
            //         //   ? authUser
            //         //   : authUser.ID
            //         passedId
            //     // typeof passedId === 'string'
            //     // ? passedId
            //     // : passedId.ID
            //   }
            // />
          )}
        </div>
        <Tabs />
        <Posts id={theID} />

        {/* <Posts id={isVisitingOwnProfile ? authUser : passedId} /> */}
        {/* <Posts
          id={
            isVisitingOwnProfile
              ? authUser
              : // typeof authUser === 'string'
                //   ? authUser
                //   : authUser.ID
                passedId
            // typeof passedId === 'string'
            // ? passedId
            // : passedId.ID
          }
        /> */}
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
