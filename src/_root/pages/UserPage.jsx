import React from 'react'
import Header from '@/components/Header.jsx';
import {Container, Flex} from "@chakra-ui/react";


const UserPage = () => {
    return (
        <Container maxW={'container.lg'} py={5}>
            <Flex direction={'column'} pl={{base:4, md:10}} className={'py-2.5 px-1 w-full mx-auto'}>
                <Header/>
            </Flex>
            <Flex>

            </Flex>
        </Container>
    )
}

export default UserPage
