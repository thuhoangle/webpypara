import { Avatar, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useProfileStore from '@/store/ProfileStore.js';
import { timeAgo } from '@/utils/timeAgo.js';

const Caption = ({ post }) => {
  const userProfile = useProfileStore((state) => state.userProfile);

  return (
    <Flex gap={2}>
      {/* <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} size={'sm'} />
      </Link> */}
      <Flex direction={'column'}>
        <Flex gap={2} alignItems={'center'}>
          <Link to={`/${userProfile[0].username}`}>
            <Text fontWeight={500} fontSize={14}>
              {userProfile[0].username}'s hashtag:
            </Text>
          </Link>
          <Text fontSize={14} className={'cursor-default'}>
            {post.tags}
          </Text>
        </Flex>
        {/* <Text fontSize={12} color={'gray'} className={'cursor-default'}>
          {timeAgo(post.postdate)}
        </Text> */}
      </Flex>
    </Flex>
  );
};

export default Caption;
