import React, {useCallback, useState} from 'react'
import {
    Flex, GridItem, Image, useDisclosure,
    Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton,
    Avatar, Divider, VStack, Button,
} from "@chakra-ui/react";
import useEmblaCarousel from 'embla-carousel-react'
import Comment from "@/components/Comment.jsx"
import PostFooter from "@/components/profile/PostFooter.jsx"
import useAuthStore from "@/store/authStore.js";
import { Link } from 'react-router-dom'
import useProfileStore from "@/store/ProfileStore.js";
import usePostStore from "@/store/postStore.js";
import {firestore, storage} from "@/firebase/firebase.js";
import {ref, deleteObject} from "firebase/storage";
import {arrayRemove, doc, updateDoc, deleteDoc} from "firebase/firestore";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IoIosMore } from "react-icons/io";
import useShowToast from "@/hook/useShowToast.js";
import Caption from "@/components/Caption.jsx";



const SinglePost = ({ post }) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const userProfile = useProfileStore((state) => state.userProfile)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const showToast = useShowToast();
    const authUser = useAuthStore(state => state.user)
    const [isDeleting, setIsDeleting] = useState(false);
    const deletePost = usePostStore((state) => state.deletePost)

    // if(!authUser) return null;
    const handleDeletePost = async () => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;
        if (isDeleting) return;

        try {
            const imageRef = ref(storage, `posts/${post.id}`);
            await deleteObject(imageRef);
            const userRef = doc(firestore, "users", authUser.uid);
            await deleteDoc(doc(firestore, "posts", post.id));

            await updateDoc(userRef, {
                posts: arrayRemove(post.id),
            });

            //delete posts
            deletePost(post.id);
            showToast("Success", "Post deleted successfully", "success");
        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
        <GridItem className={'cursor-pointer  overflow-hidden relative aspect-square'}
                    onClick={onOpen}
        >
            <Flex bg={"blackAlpha.700"} transition={'all 0.3s ease'} className={'opacity-0 hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 items-center justify-center'}></Flex>
            <Image src={post.imageURL} alt={'post'} className={'w-full h-full object-cover'}/>
        </GridItem>
            {/*size={{base:"lg", md:"3xl", lg:"6xl"}}*/}
            {/*{base:"lg", md:"3xl", lg:"5xl"}*/}
        <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base:"3xl", md:"5xl"}} h={'100vh'} bg={'transparent'} >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody className={'pb-5 w-xl'} >
                    <Flex w={{base: "90%", sm: "70%", md: "full"}} gap={4} className={' mx-auto max-h-[90vh] min-h-[50vh]'}>
                        <Flex className={'overflow-hidden border-2 border-1-solid border-white flex-grow-1.5 justify-center items-center w-3/4'}>
                            <div className="flex flex-col">
                                <div className="embla__viewport" ref={emblaRef}>
                                    <div className="embla__container flex">
                                        <div className="embla__slide flex-grow min-w-0">
                                            <img
                                                className="embla__slide__img object-contain"
                                                src={post.imageURL}/>
                                        </div>
                                        {/*<div className="embla__slide flex-grow min-w-0">Slide 2</div>*/}
                                        {/*<div className="embla__slide flex-grow min-w-0">Slide 3</div>*/}
                                    </div>
                                </div>
                                <div className={'absolute bottom-4 left-10'}>
                                    <button className="embla__prev" onClick={scrollPrev}>
                                        Prev
                                    </button>
                                    <button className="embla__next" onClick={scrollNext}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </Flex>
                        <Flex display={{base: "none", md: "flex"}} flex={1}  className={'w-full  flex-col  pr-0 pl-1 pt-8 '}>
                            <Flex className={'items-center justify-between gap-2'}>
                                <Link to={`${userProfile.username}`} className={'items-center flex justify-start gap-2'}>
                            {/*        <Avatar src={authUser.profilePicURL} size={'sm'}/>*/}
                            {/*        <p className={'font-bold text-sm'}>{authUser.username}</p>*/}
                                    <Avatar src={userProfile.profilePicURL} size={'sm'}/>
                                    <p className={'font-bold text-sm'}>{userProfile.fullName}</p>
                                </Link>

                                {authUser?.uid === userProfile.uid && (
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger asChild  >
                                            <Button variant="ghost" size='icon' className={'rounded-full'} ><IoIosMore className={'w-5 h-5'}/></Button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content className="bg-white rounded-md border-2  w-auto mt-2 justify-center shadow-md divide-y divide-gray-300">
                                            <DropdownMenu.Item className={'w-fit'} >
                                                <Button size={'sm'}  className={'pt-1 justify-center items-center bg-white w-full bg-transparent hover:bg-transparent'}
                                                        onClick={handleDeletePost}
                                                        isLoading={isDeleting}
                                                >
                                                    Delete
                                                </Button>
                                            </DropdownMenu.Item>

                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>
                                )}
                            </Flex>
                            <Divider className={'my-2 bg-gray-500'}/>
                            {/*max-h-[350px]*/}

                            <VStack alignItems={'flex-start'} className={'w-full max-h-full overflow-y-auto flex '}>
                                {post.caption && <Caption post={post} />}

                                {post.comments.map((comment) => (
                                    <Comment
                                        key={comment.id}
                                        comment={comment}
                                    />
                                ))}
                            </VStack>
 
                            <PostFooter isProfilePic={true} post={post} />
                        </Flex>
                    </Flex>
                </ModalBody>

            </ModalContent>
        </Modal>


        </>
)
}
export default SinglePost
