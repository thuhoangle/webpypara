// import React, {useRef, useState} from 'react';
// import {
//     useDisclosure,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalCloseButton,
//     ModalBody,
//     ModalFooter,
//     Button,
//     Image,
//     CloseButton,
//     Flex,
//     Textarea
// } from '@chakra-ui/react';
// import {Input} from "@/components/ui/input.jsx";
// import {addDoc, arrayUnion, collection, doc, updateDoc} from "firebase/firestore";
// import {getDownloadURL, ref, uploadString, uploadBytes} from "firebase/storage";
// import {firestore, storage} from "@/firebase/firebase.js";
// import useShowToast from "@/hook/useShowToast.js";
// import useAuthStore from "@/store/authStore.js";
// import usePostStore from "@/store/postStore.js";
// import useProfileStore from "@/store/ProfileStore.js";
// import usePreviewImg from "@/hook/usePreviewImg.js";
// import {HiPlus} from "react-icons/hi2";
// import {BsFillImageFill} from "react-icons/bs";

// const CreateBPost = () => {
//     // const { isOpen, onOpen, onClose } = useDisclosure();
//     const [note, setNote] = useState([]);
//     const [title, setTitle] = useState("");
//     const [caption, setCaption] = useState([]); // Removed note as a general post caption
//     const imageRef = useRef(null);
//     const { handleImageChange, selectedFiles, setSelectedFiles, removeImg } = usePreviewImg(); // Assuming a usePreviewImg hook
//     const showToast = useShowToast(); // Assuming a showToast function for messages
//     const { isLoading, handleCreatePost } = useCreatePost(); // Assuming useCreatePost hook

//     // Disclosure states for image selection and caption/details
//     const { isOpen: isImageOpen, onOpen: onImageOpen, onClose: onImageClose } = useDisclosure();
//     const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();

//     const handlePostCreation = async () => {
//         try {
//             await handleCreatePost(
//                 // selectedFiles,
//                 selectedFiles.map(file => file.file),
//                 title, note, caption
//             );
//             onDetailsClose();
//             setTitle('');
//             setNote([]);
//             setCaption([]);
//             setSelectedFiles([]);
//         } catch (error) {
//             showToast("Error", error.message, "error");
//         }
//     };

//     const resetProcess = () => {
//         setSelectedFiles([]);
//         setNote("");
//         setCaption([]);
//         setTitle([]);
//         onImageClose();
//     };

//     const handleNext = () => {
//         if(selectedFiles.length > 0) {
//         onImageClose();
//         onDetailsOpen();
//         } else {
//             showToast('Error', "Upload image first", 'error')
//         }
//     };

//     const handleBack = () => {
//         onDetailsClose();
//         onImageOpen();
//     };

//     // const removeImage = (index) => {
//     //     const newSelectedFiles = [...selectedFiles];
//     //     newSelectedFiles.splice(index, 1);
//     //     setSelectedFiles(newSelectedFiles);
//     //
//     //     const newCaption = [...caption];
//     //     newCaption.splice(index, 1);
//     //     setCaption(newCaption);
//     //
//     //     const newTitle = [...title];
//     //     newTitle.splice(index, 1);
//     //     setTitle(newCaption);
//     // };

//     // const selectedImg = selectedFiles?.map(imageFile => (
//     //         <Image src={imageFile.dataURL} alt="Selected Image" mx={2} my={2} ></Image>
//     //         // <CloseButton // Access remove function from the object
//     //         //     z-index={1}
//     //         //     position={"absolute"}
//     //         //     top={2}
//     //         //     right={2}
//     //         //     onClick={() => removeImage(imageFile.dataURL)}
//     //         // />
//     //         // </>
//     //     ))

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
//                         <div className="flex items-center justify-center w-full">
//                             <label htmlFor="dropzone-file"
//                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
//                                 <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                                     <BsFillImageFill
//                                         onClick={() => imageRef.current.click()}
//                                         style={{marginTop: "15px", marginLeft: "5px", cursor: "pointer"}}
//                                         size={50}
//                                     />
//                                     <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
//                                         className="font-semibold">Click to upload</span></p>
//                                     <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
//                                 </div>
//                                 <Input id="dropzone-file" type='file' hidden ref={imageRef} onChange={handleImageChange}
//                                        multiple/>
//                             </label>
//                         </div>

//                         {selectedFiles && (
//                                 <Flex mt={5} w={"full"}  justifyContent={"center"} flexWrap={'wrap'}>
//                                     {selectedFiles?.map(imageFile => (
//                                         <div key = {imageFile.file.name} className={'relative'} >
//                                         <Image src={imageFile.dataURL} alt="Selected Image" mx={2} my={2} />
//                                             <CloseButton // Access remove function from the object
//                                             z-index={1}
//                                             position={"absolute"}
//                                             top={2}
//                                             right={2}
//                                             onClick={() => removeImg(imageFile.file)}
//                                         />
//                                         </div>

//                                     ))}
//                             </Flex>
//                         )}
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button colorScheme="dark" onClick={handleNext} >
//                             Next
//                         </Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>

//             {/* Details Modal (for title and optional general caption) */}
//             <Modal isOpen={isDetailsOpen} onClose={onDetailsClose} scrollBehavior="inside" size={'3xl'}>
//                 <ModalOverlay/>
//                 <ModalContent border="1px solid gray">
//                     <ModalHeader>Post Details</ModalHeader>
//                     <ModalCloseButton onClick={onDetailsClose}/>
//                     <ModalBody pb={6}  >
//                         <Input
//                             // mb={4}
//                             placeholder="Title"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                         />

//                         {selectedFiles.map(((file, index) => (
//                             <Flex key={file.file.name} className={'flex-col '}>
//                                 <Image  className={'w-full justify-center mt-4 mb-2'}  src={file.dataURL} alt='Selected img' />
//                                 <Input
//                                     mt={2}
//                                     placeholder="Note"
//                                     value={note[index] || ''}
//                                     onChange={(e) => {
//                                         const newNotes = [...note];
//                                         newNotes[index] = e.target.value;
//                                         setNote(newNotes);
//                                     }}
//                                 />
//                                 <Textarea
//                                     mt={2}
//                                     placeholder="Caption"
//                                     value={caption[index] || ''}
//                                     onChange={(e) => {
//                                         const newCaptions = [...caption];
//                                         newCaptions[index] = e.target.value;
//                                         setCaption(newCaptions);
//                                     }}
//                                 />
//                                 <br/>
//                             </Flex>
//                         )))}
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button variant="ghost" onClick={handleBack} mr={4}>
//                             Back
//                         </Button>
//                         <Button colorScheme="dark" onClick={handlePostCreation} isLoading={isLoading}>
//                             Create Post
//                         </Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// };

// export default CreateBPost;

// function useCreatePost() {
//     const showToast = useShowToast();
//     const [isLoading, setIsLoading] = useState(false);
//     const authUser = useAuthStore((state) => state.user);
//     const createPost = usePostStore((state) => state.createPost);
//     const userProfile = useProfileStore((state) => state.userProfile);
//     // const { handleImageChange, selectedFiles, setSelectedFiles } = usePreviewImg(); // Assuming a usePreviewImg hook

//     const handleCreatePost = async (selectedFiles, title, note, caption) => {
//         if (isLoading) return;
//         if (!selectedFiles) throw new Error("Please select an image");
//         setIsLoading(true);
//         const postData = {
//             postURLs: [],
//             title,
//             note: [],
//             caption: [],
//             saved: [],
//             comments: [],
//             createdAt: Date.now(),
//             createdBy: authUser.uid,
//             // imageGroups: [], // Array to store image groups with captions and notes
//             imageGroups: caption.map((caption, index) => ({ // use caption here
//                 imageUrl: '',
//                 caption,
//                 note: note[index] || '',
//             })),
//         };

//         try {
//             const postDocRef = await addDoc(collection(firestore, "postss"), postData);
//             const userDocRef = doc(firestore, "users", authUser.uid);

//             // await Promise.all(
//             //     selectedFiles.map(image=>{
//             //         const imageRef = ref(storage, `postss/${postDocRef.id}/${image.path}`);
//             //         uploadBytes(imageRef, image, "data_url").then(async ()  => {
//             //             const downloadURL = await getDownloadURL(imageRef);
//             //             await updateDoc(doc(firestore, "postss", postDocRef.id), {
//             //                 images:arrayUnion(downloadURL)
//             //             })
//             //             // imageUrls.push(downloadURL);
//             //         })
//             //     }),
//             // await updateDoc(userDocRef, {postss: arrayUnion(postDocRef.id)})

//             const imageUploadPromises = selectedFiles.map(async (image) => {
//                 const imageRef = ref(storage, `postss/${postDocRef.id}/${image.name}`);
//                 await uploadBytes(imageRef, image, "data_url");
//                 const downloadURL = await getDownloadURL(imageRef);
//                 return downloadURL;
//             });

//             const imageUrls = await Promise.all(imageUploadPromises);

//             await updateDoc(userDocRef, { postss: arrayUnion(postDocRef.id) });
//             await updateDoc(postDocRef, { images: arrayUnion(...imageUrls) });

//             if (userProfile.uid === authUser.uid) createPost({ ...postData, id: postDocRef.id });
//             // Show success message or perform further actions
//             showToast("Success","Post created successfully!", "success");
//         } catch (error) {
//             showToast("Error", error.message, "error"); // Display error message to user
//         } finally {
//             setIsLoading(false);
//         }
//     }
//     return { isLoading, handleCreatePost };
// }

//             // for (const file of selectedFiles) {
//             //     const imageRef = ref(storage, `postss/${postDocRef.id}/${file.name}`);
//             //     await uploadString(imageRef, file, "data_url");
//             //     const downloadURL = await getDownloadURL(imageRef);
//             //     imageUrls.push(downloadURL);
//             // }

//             // await updateDoc(userDocRef, {postss: arrayUnion(postDocRef.id)});
//             // await updateDoc(postDocRef, {imageUrls});

// // function useCreatePost() {
// //     const showToast = useShowToast();
// //     const [isLoading, setIsLoading] = useState(false);
// //     const authUser = useAuthStore((state) => state.user);
// //     const createPost = usePostStore((state) => state.createPost);
// //     const userProfile = useProfileStore((state) => state.userProfile);
// //
// //     const handleCreatePost = async (postData) => {
// //         setIsLoading(true);
// //         try {
// //             const postDocRef = await addDoc(collection(firestore, "posts"), postData);
// //             const userDocRef = doc(firestore, "users", postData.createdBy);
// //
// //             const imageUrls = []; // Array to store download URLs
// //
// //             for (const [index, file] of selectedFiles.entries()) {
// //                 const imageRef = ref(storage, `posts/<span class="math-inline">\{postDocRef\.id\}/</span>{file.name}`);
// //                 await uploadString(imageRef, file, "data_url");
// //
// //                 const downloadURL = await getDownloadURL(imageRef);
// //                 imageUrls.push(downloadURL);
// //             }
// //
// //             await updateDoc(userDocRef, {posts: arrayUnion(postDocRef.id)});
// //             await updateDoc(postDocRef, {imageUrls});
// //
// //             // Show success message or perform further actions
// //             console.log("Post created successfully!");
// //             showToast("Post created successfully!", "success");
// //             resetProcess(); // Assuming resetProcess resets the component state for a new post
// //         } catch (error) {
// //             console.error("Error creating post:", error);
// //             showToast("Error", error.message, "error"); // Display error message to user
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     }
// //
// //     return { isLoading, handleCreatePost };
// // }
