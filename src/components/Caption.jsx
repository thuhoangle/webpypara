import { Avatar, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useProfileStore from '@/store/ProfileStore.js';
import { timeAgo } from '@/utils/timeAgo.js';

const Caption = ({ post }) => {
  const userProfile = useProfileStore((state) => state.userProfile);

  return (
    <Flex gap={2}>
      <Flex direction={'column'}>
        <Flex gap={2} alignItems={'center'}>
          {/* <Link to={`/${userProfile[0].username}`}> */}
          <Text fontWeight={500} fontSize={14}>
            Hashtag
          </Text>
          {/* </Link> */}
          <Text fontSize={14} className={'cursor-default'}>
            {/* {post.tags} */}
            {post?.tags ? post?.tags : 'None'}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Caption;
