import {useRef, useState} from 'react'
import {Box, Button, Divider, Flex, Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
import { FaRegBookmark, FaRegComment, FaBookmark } from "react-icons/fa";
import useComment from "@/hook/useComment.js";
import useAuthStore from "@/store/authStore.js";
import useSavePost from "@/hook/useSavePost.js";
import {timeAgo} from "@/utils/timeAgo.js";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
    const { handleSavePost, isSaved } = useSavePost(post);
    const {isCommenting, handlePostComment} = useComment();
    const [comment, setComment] = useState("");
    const authUser = useAuthStore((state) => state.user);
    const commentRef = useRef(null);

    const handleSubmitComt = async () => {
        await handlePostComment(post.id, comment);
        setComment("");
    }

    return (
    <>
        <Box className={'mb-5 mt-auto'} >
            <Divider my={4} bg={'gray.800'}/>
            <Flex className={'items-center gap-4 w-full pt-0 mb-2 mt=4'}>
                <Box onClick={handleSavePost} className={'cursor-pointer'} fontSize={18}>
                    {!isSaved ? <FaRegBookmark /> : <FaBookmark />}
                </Box>
                <Box className={'cursor-pointer'} fontSize={18} onClick={() => commentRef.current.focus()}>
                    <FaRegComment />
                </Box>
            </Flex>
            {/*<Text fontSize={'sm'} fontWeight={600}>{saves} saves</Text>*/}

            {isProfilePage && (
                <Text fontSize='11' color={"gray"}>
                    Posted
                    {timeAgo(post.createdAt)}
                </Text>
            )}

            {!isProfilePage && (
                <>
                    <Text fontSize='sm' fontWeight={700}>
                        {creatorProfile?.username}{" "}
                        <Text as='span' fontWeight={500}>
                            {post.caption}
                        </Text>
                    </Text>
                    {/*{post.comments.length > 0 && (*/}
                    {/*    <Text fontSize='sm' color={"gray"} cursor={"pointer"}>*/}
                    {/*        View all {post.comments.length} comments*/}
                    {/*    </Text>*/}
                    {/*)}*/}
                </>
                )}

            {authUser && (
                <Flex className={'items-center gap-2 justify-between w-full'}>
                    <InputGroup>
                        <Input variant={'flushed'}
                               placeholder={'Add a comment...'}
                               fontSize={14}
                               onChange={(e) => setComment(e.target.value)}
                               value={comment}
                               ref={commentRef}
                        />
                        <InputRightElement>
                            <Button  colorScheme={'blue.500'} textColor={'black'}
                                    fontSize={14} fontWeight={600}
                                    bg={'transparent'}
                                    onClick={handleSubmitComt}
                                    isLoading={isCommenting}>
                                Post
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>
            )}
        </Box>
    </>
    )
}
export default PostFooter
