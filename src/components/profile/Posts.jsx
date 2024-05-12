import React, {useEffect, useState} from 'react'
import {Grid, VStack, Box} from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import SinglePost from "@/components/profile/SinglePost.jsx";
import useGetPost from "@/hook/useGetPost.jsx";

const Posts = () => {
    const {isLoading, posts} = useGetPost();
    const noPostsFound = !isLoading && posts.length === 0;
    if(noPostsFound) return <NoPostsFound/>


    return (
        <Grid templateColumns={{
            sm:'repeat(1, 1fr)',
            md:'repeat(3, 1fr)',
        }}
              gap={1}
              columnGap={1}
              px={3}
              className={'w-full'}
        >
            {isLoading && [0,1,2].map((_, index) => (
                <VStack key={index} className={'items-start gap-1'}>
                    <Skeleton w={'full'}>
                        <Box h={'19rem'}>contents wrapped</Box>
                    </Skeleton>
                </VStack>
                ))}

            {!isLoading && (
                <>
                    {posts.map((post) => (
                        <SinglePost key={post.id} post={post} />
                        ))}
                </>
            )}
        </Grid>
    )
}
export default Posts

const NoPostsFound = () => {
    return (
        <div className="flex flex-col items-center w-full mx-auto mt-10 text-xl">
            No Posts Found :(
        </div>
    )
}