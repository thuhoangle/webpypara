import React, {useEffect, useState} from 'react'
import {Grid, VStack, Box} from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import SinglePost from "@/components/profile/SinglePost.jsx";

const Posts = () => {
    const[isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, []);


    return (
        <Grid templateColumns={{
            sm:'repeat(1, 1fr)',
            md:'repeat(3, 1fr)',
        }}
              gap={1}
              columnGap={1}
              px={3}
        >
            {isLoading && [0,1,2,3,4,5].map((_, index) => (
                <VStack key={index} className={'items-start gap-1'}>
                    <Skeleton w={'full'}>
                        <Box h={'300px'}>contents wrapped</Box>
                    </Skeleton>
                </VStack>
                ))}

            {!isLoading && (
                <>
                    <SinglePost img='/img1.jpeg'/>
                    <SinglePost img='/img2.jpeg' />
                    <SinglePost img='/img3.JPG' />
                    <SinglePost img='/img4.jpeg' />
                    <SinglePost img='/img5.jpeg' />
                    <SinglePost img='/img6.png' />


                </>
            )}
        </Grid>
    )
}
export default Posts
