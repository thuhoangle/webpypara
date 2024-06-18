// import React, { useEffect, useState } from 'react';
import { Grid, VStack, Box } from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/react';
import SinglePost from '@/components/profile/SinglePost.jsx';
import useGetPost from '@/hook/useGetPost.jsx';
import { useEffect } from 'react';

const Posts = () => {
  // const [fetchedPosts, setFetchedPosts] = useState([]);
  const { isLoading, posts } = useGetPost();

  // useEffect(() => {
  //   if (!isLoading && posts) {
  //     setFetchedPosts(posts);
  //   }
  // }, [isLoading, posts]);

  useEffect(() => {
    // You can add additional logic here if needed when posts change
    console.log('Posts changed:', posts);
  }, [posts]);

  // const handleNewPostCreated = (newPost) => {
  //   // Update local state when a new post is created
  //   setFetchedPosts([newPost, ...fetchedPosts]);
  // };
  // const noPostsFound =
  //   !isLoading && (fetchedPosts.length === 0 || !fetchedPosts);
  // if (noPostsFound) return <NoPostsFound />;

  const noPostsFound = !isLoading && (posts.length === 0 || !posts);
  if (noPostsFound) return <NoPostsFound />;

  return (
    <Grid
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gap={1}
      columnGap={1}
      px={3}
      className={'w-full'}
    >
      {isLoading &&
        [0, 1, 2].map((_, index) => (
          <VStack key={index} className={'items-start gap-1'}>
            <Skeleton w={'full'}>
              <Box h={'19rem'}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          {posts.map((post, index) => (
            <SinglePost key={index} post={post} />
          ))}
        </>
      )}
    </Grid>
  );
};
export default Posts;

const NoPostsFound = () => {
  return (
    <div className="flex flex-col items-center w-full mx-auto mt-10 text-xl">
      No Posts Found :(
    </div>
  );
};
