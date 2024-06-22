// import React, { useState, useRef } from 'react';
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     useDisclosure,
//     Input,
//     Textarea,
//     Button,
//     Image,
//     Flex,
//     Box,
// } from '@chakra-ui/react';
// import { BsFillImageFill } from "react-icons/bs";
// import useShowToast from "@/hook/useShowToast.js";
// import usePreviewImg from "@/hook/usePreviewImg.js";
// import { HiPlus } from "react-icons/hi2";
// import { arrayUnion, collection, doc, updateDoc, addDoc } from "firebase/firestore";
// import usePostStore from "@/store/postStore.js";
// import useAuthStore from "@/store/authStore.js";
// import useProfileStore from "@/store/ProfileStore.js";
// import { firestore, storage } from "@/firebase/firebase.js";
// import { getDownloadURL, ref, uploadString } from "firebase/storage";

// const CreateAPost = () => {
//     // const { isOpen, onOpen, onClose } = useDisclosure();
//     const [note, setNote] = useState('');
//     const imageRefs = useRef([]);
//     const { handleImageChange, selectedFiles, setSelectedFiles } = usePreviewImg();
//     const showToast = useShowToast();
//     const { isLoading, handleCreatePost } = useCreatePost();

//     const handlePostCreation = async () => {

//         try {
//                 await handleCreatePost( selectedFiles, imageCaptions, imageTitles, note
//                 );
//                 onDetailsClose();
//                 setImageCaptions([]);
//                 setImageTitles([]);
//                 setNote('');
//                 setSelectedFiles([]);
//                 imageRefs.current = [];
//                 // imageCaptions.length = 0; // Reset image captions
//                 // imageNotes.length = 0; // Reset image notes
//             } catch (error) {
//                 showToast("Error", error.message, "error");
//             }
//     };

//     const { isOpen: isImageOpen, onOpen: onImageOpen, onClose: onImageClose } = useDisclosure();
//     const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();

//     const handleNext = () => {
//         onImageClose();
//         onDetailsOpen();
//     };

//     const handleBack = () => {
//         onDetailsClose();
//         onImageOpen();
//     };

//     const resetProcess = () => {
//         setSelectedFiles([]);
//         imageRefs.current = [];
//         setImageCaptions([]);
//         setImageTitles([]);
//         setNote('');
//         onImageClose();
//     };

//     // State variables for individual image captions and notes
//     const [imageCaptions, setImageCaptions] = useState([]); // Array for individual image captions
//     const [imageTitles, setImageTitles] = useState([]); // Optional array for individual image titles

//     return (
//         <>
//             <div onClick={onImageOpen} className="cursor-pointer">
//                 <HiPlus className="w-12 h-12 rounded-full p-1 bg-white hover:w-14 hover:h-14" />
//             </div>

//             {/* Image Selection Modal */}
//             <Modal isOpen={isImageOpen} onClose={onImageClose} scrollBehavior="inside" size="3xl">
//                 <ModalOverlay />
//                 <ModalContent border="1px solid gray">
//                     <ModalHeader>Select Images</ModalHeader>
//                     <ModalCloseButton onClick={resetProcess} />
//                     <ModalBody pb={6}>
//                         <Flex flexWrap="wrap" justifyContent="space-between">
//                             {/* Dynamically render image inputs based on imageRefs */}
//                             {imageRefs.current.map((imageRef, index) => (
//                                 <Box key={index} w="48%" mb={4}>
//                                     <label htmlFor={`image-upload-${index}`} className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
//                                         <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                                             <BsFillImageFill
//                                                 onClick={() => imageRef.current.click()}
//                                                 style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
//                                                 size={50}
//                                             />
//                                             <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                                             <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
//                                         </div>
//                                         <Input
//                                             id={`image-upload-${index}`}
//                                             type="file"
//                                             hidden
//                                             ref={imageRef}
//                                             onChange={(e) => {
//                                                 const newFiles = [...selectedFiles];
//                                                 newFiles[index] = { file: e.target.files[0], dataURL: URL.createObjectURL(e.target.files[0]) };
//                                                 setSelectedFiles(newFiles);
//                                             }}
//                                         />
//                                     </label>
//                                     {selectedFiles[index]?.dataURL && ( // Conditionally render preview
//                                         <Image key={index} src={selectedFiles[index].dataURL} alt="Selected Image" mx={2} my={2} />
//                                     )}
//                                     {/* Input for caption */}
//                                     <Input
//                                         mt={4}
//                                         placeholder={`Caption for image ${index + 1}`}
//                                         value={imageCaptions[index] || ''} // Set default value to empty string
//                                         onChange={(e) => {
//                                             const newCaptions = [...imageCaptions];
//                                             newCaptions[index] = e.target.value;
//                                             setImageCaptions(newCaptions);
//                                         }}
//                                     />
//                                     {/* Input for note (optional) */}
//                                     <Textarea
//                                         mt={4}
//                                         placeholder={`Title for image ${index + 1}`}
//                                         value={imageTitles[index] || ''} // Set default value to empty string
//                                         onChange={(e) =>
//                                             setImageTitles([...imageTitles, e.target.value].slice(-selectedFiles.length))}
//                                     />
//                                 </Box>
//                             ))}
//                             {/* Add button to add more image inputs */}
//                             {/*<Button onClick={() => {*/}
//                             {/*    imageRefs.current.push(useRef());*/}
//                             {/*    setImageCaptions((prevCaptions) => [...prevCaptions, '']); // Add empty caption*/}
//                             {/*    setImageTitles((prevTitles) => [...prevTitles, '']); // Add empty Titles*/}
//                             {/*}} colorScheme="teal">*/}
//                             {/*    Add More Images*/}
//                             {/*</Button>*/}
//                         </Flex>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button colorScheme="dark" onClick={handleNext} disabled={selectedFiles.length === 0}>
//                             Next
//                         </Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>

//             {/* Post Details Modal */}
//             <Modal isOpen={isDetailsOpen} onClose={onDetailsClose} scrollBehavior="inside" size="lg">
//                 <ModalOverlay />
//                 <ModalContent border="1px solid gray">
//                     <ModalHeader>Add Details</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody pb={6}>
//                         <Input
//                             placeholder="Add note..."
//                             value={note}
//                             onChange={(e) => setNote(e.target.value)}
//                         />
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button onClick={handleBack}>Back</Button>
//                         <Button colorScheme="dark" onClick={handlePostCreation} isLoading={isLoading}>
//                             Post
//                         </Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// };

// export default CreateAPost;

// function useCreatePost() {
//     const showToast = useShowToast();
//     const [isLoading, setIsLoading] = useState(false);
//     const authUser = useAuthStore((state) => state.user);
//     const createPost = usePostStore((state) => state.createPost);
//     const userProfile = useProfileStore((state) => state.userProfile);

//     const handleCreatePost = async (selectedFiles, imageTitles, imageCaptions, note) => {
//         const postData = {
//             note: note,
//             saved: [], // Array for likes/saves (optional)
//             comments: [], // Array for comments (optional)
//             createdAt: Date.now(),
//             createdBy: authUser.uid,
//             imageGroups: imageCaptions.map((caption, index) => ({
//                 imageUrl: '',
//                 caption,
//                 // title: title // Individual image title or general title
//                 title: imageTitles[index] || '', // Optional note for the image
//             })),
//         };
//         if (isLoading) return;
//         if (!selectedFiles) throw new Error("Please select an image");
//         setIsLoading(true);

//         const imageUrls = []; // Array to store download URLs for all images

//         try {
//             const postDocRef = await addDoc(collection(firestore, "postss"), postData
//             );

//             const userDocRef = doc(firestore, "users", authUser.uid);

//             for (const [index, file] of selectedFiles.entries()) {
//                 const imageRef = ref(storage, `postss/${postDocRef.id}/${file.name}`); // Create image reference with unique filename
//                 await uploadString(imageRef, file, "data_url"); // Upload image

//                 const downloadURL = await getDownloadURL(imageRef);
//                 imageUrls.push(downloadURL);

//                 // Add caption and note to each image object if needed (optional)
//                 if (imageTitles && imageCaptions) {
//                     postData.imageGroups.push({
//                         imageUrl: downloadURL,
//                         title: imageTitles[index],
//                         caption: imageCaptions[index],
//                     });
//                 }
//             }

//             await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
//             await updateDoc(postDocRef, { imageUrls }); // Update post with array of image URLs

//             if (userProfile.uid === authUser.uid) createPost({ ...postData, id: postDocRef.id });

//             showToast("Success", "Post created successfully", "success");
//         } catch (error) {
//             showToast("Error", error.message, "error");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return { isLoading, handleCreatePost };
// }
