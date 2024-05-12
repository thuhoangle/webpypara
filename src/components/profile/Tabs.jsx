import React from 'react'
import {Flex, Text} from "@chakra-ui/react";

const Tabs = () => {
    return (
        <Flex gap={{base:4, sm:10}} textTransform={'uppercase'} className={'w-full justify-around font-bold py-2'}>
            {/*borderBottom={'1px solid'}*/}
            <Flex  className={' cursor-pointer items-center p-1 gap-1'}>
                <Text fontSize={'sm'} display={{base:'none', sm:'block'}}>Posts</Text>
            </Flex>
            <Flex className={'cursor-pointer items-center p-1 gap-1'}>
                <Text color={'gray'} fontSize={'sm'} display={{base:'none', sm:'block'}}>Saved
                    posts</Text>
            </Flex>
        </Flex>
    )
}
export default Tabs
