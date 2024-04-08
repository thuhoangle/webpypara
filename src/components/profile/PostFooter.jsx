import React, {useState} from 'react'
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
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
        <Box mb={10} marginTop={'auto'}>
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
        </Box>
    )
}
export default PostFooter
