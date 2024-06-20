import {
  Flex,
  GridItem,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Avatar,
  Divider,
  VStack,
  Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PostFooter from '@/components/profile/PostFooter.jsx';
import useAuthStore from '@/store/authStore.js';
import { useNavigate } from 'react-router-dom';
import useProfileStore from '@/store/ProfileStore.js';
import usePostStore from '@/store/postStore.js';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { IoIosMore } from 'react-icons/io';
import useShowToast from '@/hook/useShowToast.js';
import Caption from '@/components/Caption.jsx';
import useEmblaCarousel from 'embla-carousel-react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '@/components/carousel/carouselArrow.jsx';
import { DotButton, useDotButton } from '@/components/carousel/carouselDot.jsx';
import axios from 'axios';
import Comments from '@/components/Comment.jsx';
// import useGetUser from '@/hook/useGetUser.js';
// import { Spinner } from '@chakra-ui/react';

// const LoadingIndicator = () => (
//   <Flex
//     className="w-full h-full items-center justify-center"
//     bg="rgba(0,0,0,0.5)" // Semi-transparent black background
//     position="absolute"
//     top="0"
//     left="0"
//     right="0"
//     bottom="0"
//     zIndex="9999" // Ensures it's above other content
//   >
//     <Spinner size="xl" color="white" thickness="4px" />{' '}
//   </Flex>
// );

const SinglePost = ({ post, userProfile }) => {
  const user = userProfile;
  const authUser = useAuthStore((state) => state.user);
  console.log('🚀 ~ SinglePost ~ authUser:', authUser);
  const passedId = localStorage.getItem('IDSearch');
  console.log('🚀 ~ SinglePost ~ passedId:', passedId);
  const isVisitingOwnProfile = authUser == passedId || passedId == null;
  console.log('🚀 ~ SinglePost ~ isVisitingOwnProfile:', isVisitingOwnProfile);
  // console.log('🚀 ~ SinglePost ~ isVisitingOwnProfile:', isVisitingOwnProfile);
  const userLog = localStorage.getItem('username');
  // console.log('🚀 ~ SinglePost ~ userLog:', userLog);
  const userSearch = localStorage.getItem('userSearch');
  // console.log('🚀 ~ SinglePost ~ userSearch:', userSearch);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  // console.log('🚀 ~ SinglePost ~ authUser:', authUser);
  const showToast = useShowToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const imgurl = user?.usericon?.iconurl ?? 'https://bit.ly/broken-link';

  const handleLink = () => {
    return navigate(`/${user?.username}`);
  };

  const handleDeletePost = async (postId) => {
    try {
      const data = JSON.stringify({
        PostID: postId,
      });

      const config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `https://socialmedia-66ibb6pdga-uc.a.run.app/deletePost/${authUser}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      const response = await axios.request(config);

      if (response.status === 200) {
        usePostStore.setState((state) => ({
          posts: state.posts.filter((post) => post._id !== postId),
        }));
        showToast('Success', 'Post deleted successfully', 'success');
      } else {
        showToast('Error', 'Failed to delete post', 'error');
      }
    } catch (error) {
      showToast('Error', 'Error deleting post', 'error');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await handleDeletePost(post._id);
    } catch (error) {
      console.error('Error in handleDelete:', error);
    } finally {
      setIsDeleting(false);
      onClose();
    }
  };

  return (
    <>
      <GridItem
        className={'cursor-pointer  overflow-hidden relative aspect-square'}
        onClick={onOpen}
      >
        <Flex
          bg={'blackAlpha.700'}
          transition={'all 0.3s ease'}
          className={
            'opacity-0 hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 items-center justify-center'
          }
        ></Flex>
        {post?.pictures && post?.pictures[0] && (
          <Image
            src={post?.pictures[0].url}
            alt={'post'}
            className={'w-full h-full object-cover'}
          />
        )}
      </GridItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: '3xl', md: '5xl' }}
        h={'100vh'}
        bg={'transparent'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className={'pb-5 w-xl'}>
            <Flex
              w={{ base: '90%', sm: '70%', md: 'full' }}
              gap={4}
              className={' mx-auto h-[72vh]'}
            >
              <div className="flex flex-col justify-start w-3/4 ">
                <Flex
                  className="embla__viewport overflow-hidden -ml-4"
                  ref={emblaRef}
                >
                  <div className="embla__container flex ">
                    {post?.pictures?.map((file, index) => (
                      <div
                        key={index}
                        className="embla__slide min-w-0 shrink-0 grow-0 basis-full "
                      >
                        <img
                          className="embla__slide__img object-fill w-[47rem] aspect-square "
                          src={file.url}
                          alt={`Post ${index}`}
                        />
                      </div>
                    ))}
                  </div>
                </Flex>
                <div
                  className={
                    'absolute bottom-4 left-5 grid grid-cols-[auto_1fr] justify-between gap-4 mt-3'
                  }
                >
                  <div className="embla__buttons grid grid-cols-[repeat(2,1fr)] gap-3 items-center">
                    <PrevButton
                      onClick={onPrevButtonClick}
                      disabled={prevBtnDisabled}
                    />
                    <NextButton
                      onClick={onNextButtonClick}
                      disabled={nextBtnDisabled}
                    />
                  </div>
                  <div className="embla__dots flex flex-wrap justify-end items-center mr={'calc((2.6rem - 1.4rem) / 2 * -1)'}">
                    {scrollSnaps.map((_, index) => (
                      <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(
                          index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Flex
                display={{ base: 'none', md: 'flex' }}
                flex={1}
                className={'w-full  flex-col  pr-0 pl-1 pt-8 '}
              >
                <Flex className={'items-center  gap-3'} onClick={handleLink}>
                  {/* <Link
                    to={`${userProfile[0]?.username}`}
                    className={'items-center flex justify-start gap-2'}
                  > */}
                  <Avatar src={imgurl} size={'sm'} />
                  {/* 
                  {imgurl ? (
                    <Avatar src={imgurl} size={'sm'} />
                  ) : (
                    <Avatar src="https://bit.ly/broken-link" size={'sm'} />
                  )} */}

                  <p className={'font-bold w-fit text-sm'}>
                    {/* {user?.username ? user?.username : 'User'} */}
                    {isVisitingOwnProfile ? userLog : userSearch}
                  </p>
                  {/* </Link> */}
                  {isVisitingOwnProfile && (
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={'rounded-full'}
                        >
                          <IoIosMore className={'w-5 h-5'} />
                        </Button>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content className="bg-white rounded-md border-2  w-auto mt-2 justify-center shadow-md divide-y divide-gray-300">
                        <DropdownMenu.Item className={'w-fit'}>
                          <Button
                            size={'sm'}
                            className={
                              'pt-1 justify-center items-center bg-white w-full bg-transparent hover:bg-transparent'
                            }
                            onClick={handleDelete}
                            isLoading={isDeleting}
                          >
                            Delete post
                          </Button>
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Root>
                  )}
                </Flex>
                <Divider className={'my-2 bg-gray-500'} />
                <VStack
                  alignItems={'flex-start'}
                  className={'w-full max-h-full overflow-y-auto flex '}
                >
                  {post?.description && <Caption post={post} />}
                  {post?.comments?.map((comment, index) => (
                    <Comments key={index} comment={comment} />
                  ))}
                </VStack>
                <PostFooter
                  isProfilePic={true}
                  post={post}
                  // user={user}
                  userId={user?._id}
                  user={isVisitingOwnProfile ? userLog : userSearch}
                />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SinglePost;
