// import React, { useRef, useState } from 'react';
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Input,
//   Button,
//   Image,
//   Flex,
// } from '@chakra-ui/react';
// import { BsFillImageFill } from 'react-icons/bs';
// import useShowToast from '@/hook/useShowToast.js';
// import usePreviewImg from '@/hook/usePreviewImg.js';
// import { HiPlus } from 'react-icons/hi2';
// import axios from 'axios';
// import usePostStore from '@/store/postStore.js';
// import useGetPost from '@/hook/useGetPost.jsx';
// import useAuthStore from '@/store/authStore.js';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [note, setNote] = useState('');
//   const imageRef = useRef(null);
//   const { handleImageChange, selectedFiles, setSelectedFiles, removeImg } =
//     usePreviewImg();
//   const showToast = useShowToast();
//   const { isLoading, handleCreatePost } = useCreatePost();

//   const handlePostCreation = async () => {
//     try {
//       await handleCreatePost(selectedFiles, title, note);
//       onCapClose();
//       setTitle('');
//       setNote('');
//       setSelectedFiles([]);
//     } catch (error) {
//       showToast('Error handleCreate', error.message, 'error');
//     }
//   };

//   const {
//     isOpen: isPicOpen,
//     onOpen: onPicOpen,
//     onClose: onPicClose,
//   } = useDisclosure();
//   const {
//     isOpen: isCapOpen,
//     onOpen: onCapOpen,
//     onClose: onCapClose,
//   } = useDisclosure();

//   const handleNext = () => {
//     onCapOpen();
//     onPicClose();
//   };
//   const handleBack = () => {
//     onCapClose();
//     onPicOpen();
//   };

//   const resetProcess = () => {
//     setSelectedFiles([]);
//     imageRef.current = [];
//     onPicClose();
//   };

//   return (
//     <>
//       <div onClick={onPicOpen} className={' cursor-pointer'}>
//         <HiPlus
//           className={
//             'w-12 h-12 rounded-full p-1 bg-white hover:w-14 hover:h-14 '
//           }
//         />
//       </div>

//       <Modal
//         isOpen={isPicOpen}
//         onClose={onPicClose}
//         scrollBehavior={'inside'}
//         size="3xl"
//       >
//         <ModalOverlay />
//         <ModalContent border={'1px solid gray'}>
//           <ModalHeader>Create Post</ModalHeader>
//           <ModalCloseButton onClick={resetProcess} />
//           <ModalBody pb={6}>
//             <div className="flex items-center justify-center w-full">
//               <label
//                 htmlFor="dropzone-file"
//                 className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
//               >
//                 <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                   <BsFillImageFill
//                     onClick={() => imageRef.current.click()}
//                     style={{
//                       marginTop: '15px',
//                       marginLeft: '5px',
//                       cursor: 'pointer',
//                     }}
//                     size={50}
//                   />
//                   <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                     <span className="font-semibold">Click to upload</span> or
//                     drag and drop
//                   </p>
//                   <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
//                 </div>
//                 <Input
//                   id="dropzone-file"
//                   type="file"
//                   hidden
//                   ref={imageRef}
//                   onChange={handleImageChange}
//                   multiple
//                 />
//               </label>
//             </div>
//             {selectedFiles.length > 0 && (
//               <Flex
//                 mt={5}
//                 w={'full'}
//                 position={'relative'}
//                 justifyContent={'center'}
//                 flexWrap={'wrap'}
//               >
//                 {selectedFiles.map((imageFile, index) => (
//                   <div key={index} className="flex items-center relative mb-4">
//                     <label htmlFor={`image-upload-${index}`}>
//                       <Image
//                         className="relative"
//                         src={imageFile.dataURL}
//                         alt="Selected Image"
//                         mx={2}
//                         my={2}
//                       ></Image>
//                     </label>
//                     <Button // Access remove function from the object
//                       position={'absolute'}
//                       colorScheme={'red'}
//                       variant={'ghost'}
//                       size={'sm'}
//                       top={4}
//                       right={0}
//                       zIndex={100}
//                       onClick={() => removeImg(imageFile.file)}
//                     >
//                       X
//                     </Button>
//                   </div>
//                 ))}
//               </Flex>
//             )}
//           </ModalBody>
//           <ModalFooter>
//             <Button
//               colorScheme={'dark'}
//               onClick={handleNext}
//               isDisabled={selectedFiles.length == 0}
//             >
//               Next
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       <Modal
//         isOpen={isCapOpen}
//         onClose={onCapClose}
//         scrollBehavior={'inside'}
//         size="3xl"
//       >
//         <ModalOverlay />
//         <ModalContent border={'1px solid gray'}>
//           <ModalHeader>Create Post</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <Input
//               placeholder="Add title..."
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <Input
//               mt={2}
//               placeholder="Add tag..."
//               value={note}
//               onChange={(e) => setNote(e.target.value)}
//             />
//             {selectedFiles.map((file, index) => (
//               <Flex key={file.file.name} className={'flex-col '}>
//                 <Image
//                   className={'w-full justify-center mt-4 mb-2'}
//                   src={selectedFiles[index].dataURL}
//                   alt="Selected img"
//                 />
//               </Flex>
//             ))}
//           </ModalBody>
//           <ModalFooter>
//             <div className={'w-full flex justify-between'}>
//               <Button onClick={handleBack}>Back</Button>
//               <Button
//                 colorScheme={'dark'}
//                 onClick={handlePostCreation}
//                 isLoading={isLoading}
//               >
//                 Post
//               </Button>
//             </div>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };
// export default CreatePost;

// const useCreatePost = () => {
//   const showToast = useShowToast();
//   const [isLoading, setIsLoading] = useState(false);
//   const { posts, setPosts } = usePostStore();
//   const { uploadImages } = usePreviewImg();
//   const authUser = useAuthStore((state) => state.user);
//   const id = localStorage.getItem('ID');

//   const handleCreatePost = async (selectedFiles, title, note) => {
//     if (isLoading) return;
//     setIsLoading(true);
//     try {
//       const uploadedUrls = await uploadImages(selectedFiles);

//       const dataPost = {
//         Description: title,
//         Tags: note.split(',').map((tag) => tag.trim()),
//         Comments: [],
//         likes: [],
//         Pictures: uploadedUrls.map((url) => ({ URL: url })),
//       };

//       const newPost = {
//         ...dataPost,
//         _id: Date.now(),
//       };

//       const response = await axios.post(
//         `https://socialmedia-66ibb6pdga-uc.a.run.app/createPost/${id}`,
//         dataPost,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       if (response.status === 201) {
//         const { PostID } = response.data.post_id;
//         localStorage.setItem('PostID', PostID);
//         newPost._id = response.data.post_id;
//         // setPosts([newPost, ...posts]); // update posts from server
//         usePostStore.setState((state) => ({
//           posts: [newPost, ...state.posts],
//         }));
//         showToast('Success', 'Post created successfully', 'success');
//       }
//     } catch (error) {
//       showToast('Error', error.message, 'error');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { isLoading, handleCreatePost };
// };

import React, { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Button,
  Image,
  Flex,
} from '@chakra-ui/react';
import { BsFillImageFill } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi2';
import axios from 'axios';
import usePostStore from '@/store/postStore.js';
import useAuthStore from '@/store/authStore.js';
import useShowToast from '@/hook/useShowToast.js';
import usePreviewImg from '@/hook/usePreviewImg.js';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const imageRef = useRef(null);
  const {
    handleImageChange,
    selectedFiles,
    setSelectedFiles,
    removeImg,
    handleDrop,
    handleDragOver,
  } = usePreviewImg();
  const showToast = useShowToast();
  const { isLoading, handleCreatePost } = useCreatePost();

  const handlePostCreation = async () => {
    try {
      await handleCreatePost(selectedFiles, title, note);
      onCapClose();
      setTitle('');
      setNote('');
      setSelectedFiles([]);
    } catch (error) {
      console.log('Error handleCreate', error.message);
    }
  };

  const {
    isOpen: isPicOpen,
    onOpen: onPicOpen,
    onClose: onPicClose,
  } = useDisclosure();
  const {
    isOpen: isCapOpen,
    onOpen: onCapOpen,
    onClose: onCapClose,
  } = useDisclosure();

  const handleNext = () => {
    onCapOpen();
    onPicClose();
  };
  const handleBack = () => {
    onCapClose();
    onPicOpen();
  };

  const resetProcess = () => {
    setSelectedFiles([]);
    imageRef.current = [];
    onPicClose();
  };

  return (
    <>
      <div onClick={onPicOpen} className={' cursor-pointer'}>
        <HiPlus
          className={
            'w-12 h-12 rounded-full p-1 bg-white hover:w-14 hover:h-14 '
          }
        />
      </div>

      <Modal
        isOpen={isPicOpen}
        onClose={onPicClose}
        scrollBehavior={'inside'}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent border={'1px solid gray'}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton onClick={resetProcess} />
          <ModalBody pb={6}>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <BsFillImageFill
                    onClick={() => imageRef.current.click()}
                    style={{
                      marginTop: '15px',
                      marginLeft: '5px',
                      cursor: 'pointer',
                    }}
                    size={50}
                  />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                </div>
                <Input
                  id="dropzone-file"
                  type="file"
                  hidden
                  ref={imageRef}
                  onChange={handleImageChange}
                  multiple
                />
              </label>
            </div>
            {selectedFiles.length > 0 && (
              <Flex
                mt={5}
                w={'full'}
                position={'relative'}
                justifyContent={'center'}
                flexWrap={'wrap'}
              >
                {selectedFiles.map((imageFile, index) => (
                  <div key={index} className="flex items-center relative mb-4">
                    <label htmlFor={`image-upload-${index}`}>
                      <Image
                        className="relative"
                        src={imageFile.dataURL}
                        alt="Selected Image"
                        mx={2}
                        my={2}
                      />
                    </label>
                    <Button
                      position={'absolute'}
                      colorScheme={'red'}
                      variant={'ghost'}
                      size={'sm'}
                      top={4}
                      right={0}
                      zIndex={100}
                      onClick={() => removeImg(imageFile.file)}
                    >
                      X
                    </Button>
                  </div>
                ))}
              </Flex>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={'dark'}
              onClick={handleNext}
              isDisabled={selectedFiles.length == 0}
            >
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isCapOpen}
        onClose={onCapClose}
        scrollBehavior={'inside'}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent border={'1px solid gray'}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              placeholder="Add title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              mt={2}
              placeholder="Add tag..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            {selectedFiles.map((file, index) => (
              <Flex key={file.file.name} className={'flex-col '}>
                <Image
                  className={'w-full justify-center mt-4 mb-2'}
                  src={selectedFiles[index].dataURL}
                  alt="Selected img"
                />
              </Flex>
            ))}
          </ModalBody>
          <ModalFooter>
            <div className={'w-full flex justify-between'}>
              <Button onClick={handleBack}>Back</Button>
              <Button
                colorScheme={'dark'}
                onClick={handlePostCreation}
                isLoading={isLoading}
              >
                Post
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;

const useCreatePost = () => {
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const { posts, setPosts } = usePostStore();
  const { uploadImages } = usePreviewImg();
  const authUser = useAuthStore((state) => state.user);
  const id = localStorage.getItem('ID');

  const handleCreatePost = async (selectedFiles, title, note) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const uploadedUrls = await uploadImages(selectedFiles);

      const dataPost = {
        Description: title,
        Tags: note.split(',').map((tag) => tag.trim()),
        Comments: [],
        likes: [],
        Pictures: uploadedUrls.map((url) => ({ URL: url })),
      };

      const newPost = {
        ...dataPost,
        _id: Date.now(),
      };

      const response = await axios.post(
        `https://socialmedia-66ibb6pdga-uc.a.run.app/createPost/${id}`,
        dataPost,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 201) {
        const { PostID } = response.data.post_id;
        localStorage.setItem('PostID', PostID);
        newPost._id = response.data.post_id;
        setPosts([newPost, ...posts]); // Update posts with actual post from server
        showToast('Success', 'Post created successfully', 'success');
      }
    } catch (error) {
      showToast('Error', error.message, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCreatePost };
};
