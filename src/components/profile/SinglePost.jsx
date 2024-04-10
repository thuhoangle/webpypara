import React, {useCallback} from 'react'
import {
    Flex, GridItem, Image, useDisclosure,
    Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton,
    Avatar, Box, Divider, VStack
} from "@chakra-ui/react";
import useEmblaCarousel from 'embla-carousel-react'
import Comment from "@/components/Comment.jsx"
import PostFooter from "@/components/profile/PostFooter.jsx"




const SinglePost = ({ img }) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])


    return (
        <>
        <GridItem className={'cursor-pointer  overflow-hidden relative aspect-square'}
                    onClick={onOpen}
        >
            <Flex bg={"blackAlpha.700"} transition={'all 0.3s ease'} className={'opacity-0 hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 items-center justify-center'}>
                {/*<Flex className={'items-center justify-center gap-5'}>*/}
                {/*</Flex>*/}
                {/*<Flex></Flex>*/}
            </Flex>
            <Image src={img} alt={'post'} className={'w-full h-full object-cover'}/>
        </GridItem>
            {/*size={{base:"lg", md:"3xl", lg:"6xl"}}*/}
            {/*{base:"lg", md:"3xl", lg:"5xl"}*/}
        <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base:"3xl", md:"5xl"}} h={'100vh'} bg={'transparent'} >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody className={'pb-5 w-xl'} >
                    <Flex w={{base: "90%", sm: "70%", md: "full"}} gap={4} className={' mx-auto'}>
                        <Box className={'overflow-hidden border-2 border-1-solid border-white flex-grow-1.5'}>
                            {/*<div className="embla overflow-hidden  border-2 border-1-solid border-white flex-grow-1.5 ">*/}
                                <div className="embla__viewport" ref={emblaRef}>
                                    <div className="embla__container flex">
                                        <div className="embla__slide flex-grow min-w-0">
                                            <img
                                                className="embla__slide__img object-cover"
                                                src={img}/>
                                        </div>
                                        {/*<div className="embla__slide flex-grow min-w-0">Slide 2</div>*/}
                                        {/*<div className="embla__slide flex-grow min-w-0">Slide 3</div>*/}
                                    </div>
                                </div>
                                    <button className="embla__prev" onClick={scrollPrev}>
                                        Prev
                                    </button>
                                    <button className="embla__next" onClick={scrollNext}>
                                        Next
                                    </button>
                            {/*</div>*/}
                        </Box>
                        <Flex display={{base: "none", md: "flex"}} flex={1}  className={'w-full  flex-col  pr-0 pl-2  '}>
                            <Flex className={'items-center justify-start gap-2'}>
                                <Avatar src={'src/assets/ava.jpeg'} size={'sm'}/>
                                <p className={'font-bold text-sm'}>shiba</p>
                            </Flex>
                            <Divider className={'my-2 bg-gray-500'}/>
                            {/*max-h-[350px]*/}

                            <VStack alignItems={'flex-start'} className={'w-full max-h-full overflow-y-auto '}>
                                <Comment
                                    createdAt={'2d ago'}
                                    username={'shinchan'}
                                    profilePic={'/shin.jpeg'}
                                    text={'waooo'}
                                />
                                <Comment
                                    createdAt={'2d ago'}
                                    username={'shinladyy'}
                                    profilePic={'/shin2.jpeg'}
                                    text={'u ate'}
                                />
                                <Comment
                                    createdAt={'2d ago'}
                                    username={'yoboiBoo'}
                                    profilePic={'/boo.jpeg'}
                                    text={'sheeshh'}
                                />
                                <Comment
                                    createdAt={'2d ago'}
                                    username={'yoboiBoo'}
                                    profilePic={'/boo.jpeg'}
                                    text={'sheeshh'}
                                />
                                <Comment
                                    createdAt={'2d ago'}
                                    username={'yoboiBoo'}
                                    profilePic={'/boo.jpeg'}
                                    text={'sheeshh'}
                                />
                                <Comment
                                    createdAt={'2d ago'}
                                    username={'yoboiBoo'}
                                    profilePic={'/boo.jpeg'}
                                    text={'sheeshh'}
                                />
                                <Comment
                                    createdAt={'2d ago'}
                                    username={'yoboiBoo'}
                                    profilePic={'/boo.jpeg'}
                                    text={'sheeshh'}
                                />
                                <Comment
                                    createdAt={'2d ago'}
                                    username={'yoboiBoo'}
                                    profilePic={'/boo.jpeg'}
                                    text={'sheeshh'}
                                />
                                <Comment
                                    createdAt={'2d ago'}
                                    username={'yoboiBoo'}
                                    profilePic={'/boo.jpeg'}
                                    text={'sheesvdfbgbgnrhh'}
                                />

                            </VStack>
 
                            <PostFooter isProfilePic={true}/>
                        </Flex>
                    </Flex>
                </ModalBody>

            </ModalContent>
        </Modal>


        </>
)
}
export default SinglePost
