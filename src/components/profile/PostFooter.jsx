import { useRef, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { FaRegBookmark, FaRegComment, FaBookmark } from 'react-icons/fa';
import useComment from '@/hook/useComment.js';
import useAuthStore from '@/store/authStore.js';
import useSavePost from '@/hook/useSavePost.js';
import { timeAgo } from '@/utils/timeAgo.js';
import useProfileStore from '@/store/ProfileStore.js';

const PostFooter = ({ post, isProfilePage, userId, user }) => {
  // console.log('🚀 ~ PostFooter ~ user:', userId);
  const { handleSavePost, isSaved, saves } = useSavePost(post);
  const { isCommenting, handlePostComment } = useComment();
  const [comment, setComment] = useState('');
  const authUser = useAuthStore((state) => state.user);
  // console.log('🚀 ~ PostFooter ~ authUser:', authUser);
  const commentRef = useRef(null);
  const userProfile = useProfileStore((state) => state.userProfile);

  const handleSubmitComt = async () => {
    await handlePostComment(post?._id, comment);
    setComment('');
  };
  const handleSave = () => {
    handleSavePost(userId, post?._id);
  };

  return (
    <>
      <Box className={'mb-5 mt-auto'}>
        {post?.comments?.length > 3 && (
          <Text fontSize="sm" color={'gray'} cursor={'pointer'}>
            View all {post?.comments?.length} comments
          </Text>
        )}
        <Divider mt={0} mb={3} bg={'gray.800'} />
        <Flex className={'items-center gap-4 w-full pt-0 mb-2 mt=4'}>
          <Box onClick={handleSave} className={'cursor-pointer'} fontSize={18}>
            {!isSaved ? <FaRegBookmark /> : <FaBookmark />}
          </Box>
          <Box
            className={'cursor-pointer'}
            fontSize={18}
            onClick={() => commentRef.current.focus()}
          >
            <FaRegComment />
          </Box>
        </Flex>

        {isProfilePage && (
          <Text fontSize="11" color={'gray'}>
            Posted {timeAgo(post.postdate)}
          </Text>
        )}

        {!isProfilePage && (
          <div className="flex flex-col ">
            <div className={'flex gap-2 text-sm items-center cursor-default'}>
              {/* <Text fontWeight={700}>{user?.username}</Text> */}
              <Text fontWeight={700}>{user}</Text>

              <Text>{post.description}</Text>
            </div>

            <Text fontSize="11" color={'gray'}>
              Posted {timeAgo(post.postdate)}
            </Text>
          </div>
        )}

        {authUser && (
          <Flex className={'items-center gap-2 justify-between w-full'}>
            <InputGroup>
              <Input
                variant={'flushed'}
                placeholder={'Add a comment...'}
                fontSize={14}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                ref={commentRef}
              />
              <InputRightElement>
                <Button
                  colorScheme={'blue.500'}
                  textColor={'black'}
                  fontSize={14}
                  fontWeight={600}
                  bg={'transparent'}
                  onClick={handleSubmitComt}
                  isLoading={isCommenting}
                >
                  Post
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default PostFooter;
