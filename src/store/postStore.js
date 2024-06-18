import { create } from 'zustand';
import axios from 'axios';
import useAuthStore from './authStore';

const usePostStore = create((set) => ({
  posts: [],
  // setPosts: (newPost) =>
  //   set((state) => ({
  //     posts: [newPost, ...state.posts], // Assuming newPost is an object representing the newly created post
  //   })),
  setPosts: (posts) => set({ posts }),
  // addComment: (postId, comment) =>
  //     set((state) => ({
  //         posts: state.posts.map((post) => {
  //             if (post.id === postId) {
  //                 return {
  //                     ...post,
  //                     comments: [...post.comments, comment],
  //                 };
  //             }
  //             return post;
  //         }),
  //     })),
  // createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  // deletePost: async (postId) => {
  //   try {
  //     const data = JSON.stringify({
  //       PostID: postId,
  //     });

  //     const config = {
  //       method: 'put',
  //       maxBodyLength: Infinity,
  //       url: `https://socialmedia-66ibb6pdga-uc.a.run.app/deletePost/${authUser}`,
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       data: data,
  //     };

  //     const response = await axios.request(config);
  //     console.log(JSON.stringify(response.data));

  //     if (response.status === 200) {
  //       set((state) => ({
  //         posts: state.posts.filter((post) => post._id !== postId),
  //       }));
  //     } else {
  //       console.error('Failed to delete post: ', response.data);
  //     }
  //   } catch (error) {
  //     console.error('Error deleting post: ', error);
  //   }
  // },
}));

export default usePostStore;
