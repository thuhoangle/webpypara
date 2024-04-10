import React, {useState} from 'react'
import {Box, Button, Divider, Flex, Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";

const PostFooter = ({username, isProfilePage}) => {
    const [saved, setSaved] = useState(false);
    const [saves, setSaves] = useState(1000);

    const handleSave = () => {
        if (saved) {
            setSaved(false);
            // setSaves(saves - 1);
        } else {
            setSaved(true);
            // setSaves(saves + 1);
        }
    }

    return (
    <>


        <Box mb={10} marginTop={'auto'}>
            <Divider my={4} bg={'gray.800'}/>
            <Flex className={'items-center gap-4 w-full pt-0 mb-2 mt=4'}>
                <Box onClick={handleSave} className={'cursor-pointer'} fontSize={18}>
                    {!saved ? <FaRegBookmark /> : <FaRegBookmark className={'text-black'}/>}
                </Box>
                <Box className={'cursor-pointer'} fontSize={18}>
                    <FaRegComment />
                </Box>
            </Flex>
            <Text fontSize={'sm'} fontWeight={600}>{saves} saves</Text>

            {!isProfilePage && (
                <>
                <Text as={'span'} fontWeight={400}>
                bobaboba
                </Text>
                    <Text fontSize={'sm'} color={'gray'}>
                        View all 18 comments
                    </Text>
                </>
                )}

            <Flex className={'items-center gap-2 justify-between w-full'}>
                <InputGroup>
                    <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14}/>
                    <InputRightElement>
                        <Button  colorScheme={'blue.500'} textColor={'black'}
                                fontSize={14} fontWeight={600}
                                bg={'transparent'}>
                            Post
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    </>
    )
}
export default PostFooter
