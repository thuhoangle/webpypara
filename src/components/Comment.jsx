import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import useGetUserProfileById from '@/hook/useGetUserProfileById.js';
import useGetUser from '@/hook/useGetUser.js';
import { timeAgo } from '@/utils/timeAgo.js';
import useProfileStore from '@/store/ProfileStore.js';

const Comments = ({ comment }) => {
  const { userProfile, isLoading } = useGetUser(comment.userid);
  const user = userProfile;
  // console.log('🚀 ~ Comments!!!! ~ user:', user);
  //   console.log('🚀 ~ Comment ~ userProfile:', userProfile);

  if (isLoading) return <CommentSkeleton />;

  return (
    <Flex gap={2}>
      <Link src={`/${comment?.username}`}>
        <Avatar src={user?.usericon.iconurl} size="sm" />
      </Link>
      <Flex direction="column">
        <Flex gap={2} alignItems={'center'}>
          <Link src={`/${comment?.username}`}>
            <Text fontWeight={'medium'} fontSize={14}>
              {comment?.username}
            </Text>
          </Link>

          <Text fontSize={14} className={'cursor-default'}>
            {comment?.text}
          </Text>
        </Flex>
        {/* <Text fontSize={12} color={'gray'} className={'cursor-default'}>
          {timeAgo(comment.commentdate)}
        </Text> */}
      </Flex>
    </Flex>
  );
};
export default Comments;
const CommentSkeleton = () => {
  return (
    <Flex gap={4} w={'full'} alignItems={'center'}>
      <SkeletonCircle h={10} w="10" />
      <Flex gap={1} flexDir={'column'}>
        <Skeleton height={2} width={100} />
        <Skeleton height={2} width={50} />
      </Flex>
    </Flex>
  );
};
