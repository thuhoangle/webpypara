import React, {useRef, useState} from 'react'
import {
    Modal, ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Input, Textarea, CloseButton, Button, Image, Flex
} from '@chakra-ui/react'
import {BsFillImageFill} from "react-icons/bs";
import useShowToast from "@/hook/useShowToast.js";
import usePreviewImg from "@/hook/usePreviewImg.js";
import {HiPlus} from "react-icons/hi2";
import {arrayUnion, collection, doc, updateDoc, addDoc} from "firebase/firestore";
import usePostStore from "@/store/postStore.js";
import useAuthStore from "@/store/authStore.js";
import useProfileStore from "@/store/ProfileStore.js";
import {firestore, storage} from "@/firebase/firebase.js";
import {getDownloadURL, ref, uploadString} from "firebase/storage";


const CreatePost = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [caption, setCaption] = useState("");
    const imageRef = useRef(null);
    const { handleImageChange, selectedFiles, setSelectedFiles } = usePreviewImg();
    const showToast = useShowToast();
    const { isLoading, handleCreatePost } = useCreatePost();
    const handlePostCreation = async () => {
        try {
            await handleCreatePost(
                // selectedFiles,
                selectedFiles.map(file => file.file),
                title, note, caption
            );
            onCapClose();
            setTitle("");
            setNote("");
            setCaption("");
            setSelectedFiles([]);
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    };

    const { isOpen: isPicOpen , onOpen: onPicOpen, onClose: onPicClose } = useDisclosure()
    const { isOpen: isCapOpen , onOpen: onCapOpen, onClose: onCapClose } = useDisclosure()

    const handleNext = () => {
        onCapOpen();
        onPicClose();
    }
    const handleBack = () => {
        onCapClose();
        onPicOpen();
    }

    const resetProcess = () => {
        setSelectedFiles([]);
        imageRef.current = []; // Clear image refs
        onPicClose();
    }

    return (
        <>
                <div onClick={onPicOpen} className={' cursor-pointer'} >
                    <HiPlus className={'w-12 h-12 rounded-full p-1 bg-white hover:w-14 hover:h-14 ' } />
                </div>

            <Modal isOpen={isPicOpen} onClose={onPicClose} scrollBehavior={'inside'}  size='3xl'>
                <ModalOverlay />
                <ModalContent  border={"1px solid gray"}>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton onClick={resetProcess} />
                    {/*<ModalBody pb={6}>*/}
                    {/*    <div className="flex items-center justify-center w-full">*/}
                    {/*        <label htmlFor="dropzone-file"*/}
                    {/*               className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">*/}
                    {/*            <div className="flex flex-col items-center justify-center pt-5 pb-6">*/}
                    {/*                <BsFillImageFill*/}
                    {/*                    onClick={() => imageRef.current.click()}*/}
                    {/*                    style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}*/}
                    {/*                    size={50}*/}
                    {/*                />*/}
                    {/*                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span*/}
                    {/*                    className="font-semibold">Click to upload</span> or drag and drop</p>*/}
                    {/*                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>*/}
                    {/*            </div>*/}
                    {/*            <Input id="dropzone-file" type='file' hidden ref={imageRef} onChange={handleImageChange} multiple/>*/}
                    {/*        </label>*/}
                    {/*    </div>*/}
                    {/*    {selectedFiles.length > 0 && (*/}
                    {/*        <Flex mt={5} w={"full"} position={"relative"} justifyContent={"center"} flexWrap={'wrap'}>*/}
                    {/*            {selectedFiles.map((imageFile) => (*/}
                    {/*                <Image key={imageFile.file.id} src={imageFile.dataURL} alt="Selected Image" mx={2} my={2}>*/}
                    {/*                    {imageFile.remove && <CloseButton // Access remove function from the object*/}
                    {/*                        position={"absolute"}*/}
                    {/*                        top={2}*/}
                    {/*                        right={2}*/}
                    {/*                        onClick={() => imageFile.remove()}*/}
                    {/*                    />}*/}
                    {/*                </Image>*/}
                    {/*            ))}*/}
                    {/*        </Flex>*/}
                    {/*    )}*/}
                    {/*</ModalBody>*/}



                    <ModalBody pb={6}>
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file"
                                   className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <BsFillImageFill
                                        onClick={() => imageRef.current.click()}
                                        style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
                                        size={50}
                                    />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                        className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                                </div>
                                <Input id="dropzone-file" type='file' hidden ref={imageRef} onChange={handleImageChange} multiple/>
                            </label>
                        </div>
                        {selectedFiles.length > 0 && (
                            <Flex mt={5} w={"full"} position={"relative"} justifyContent={"center"} flexWrap={'wrap'}>
                                {selectedFiles.map((imageFile, index) => (
                                    <div key={index} className="flex items-center mb-4">
                                        <label htmlFor={`image-upload-${index}`}>
                                    <Image key={imageFile.file.id} src={imageFile.dataURL} alt="Selected Image" mx={2} my={2}>
                                        {imageFile.remove && <CloseButton // Access remove function from the object
                                            position={"absolute"}
                                            top={2}
                                            right={2}
                                            onClick={() => imageFile.remove()}
                                        />}
                                    </Image>
                                        </label>
                                    </div>
                                ))}
                            </Flex>
                        )}
                    </ModalBody>



                    {/*<ModalBody pb={6}>*/}
                    {/*    <Flex flexWrap="wrap" justifyContent="space-between">*/}
                    {/*        /!* Dynamically render image inputs based on imageRefs *!/*/}
                    {/*        {imageRef.current.map((imageRef, index) => (*/}
                    {/*            <Box key={index} w="48%" mb={4}>*/}
                    {/*                <label htmlFor={`image-upload-${index}`} className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">*/}
                    {/*                    <div className="flex flex-col items-center justify-center pt-5 pb-6">*/}
                    {/*                        <BsFillImageFill*/}
                    {/*                            onClick={() => imageRef.current.click()}*/}
                    {/*                            style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}*/}
                    {/*                            size={50}*/}
                    {/*                        />*/}
                    {/*                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>*/}
                    {/*                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>*/}
                    {/*                    </div>*/}
                    {/*                    <Input*/}
                    {/*                        id={`image-upload-${index}`}*/}
                    {/*                        type="file"*/}
                    {/*                        hidden*/}
                    {/*                        ref={imageRef}*/}
                    {/*                        onChange={(e) => {*/}
                    {/*                            const newFiles = [...selectedFiles];*/}
                    {/*                            newFiles[index] = { file: e.target.files[0], dataURL: URL.createObjectURL(e.target.files[0]) };*/}
                    {/*                            setSelectedFiles(newFiles);*/}
                    {/*                        }}*/}
                    {/*                    />*/}
                    {/*                </label>*/}
                    {/*                {selectedFiles[index]?.dataURL && ( // Conditionally render preview*/}
                    {/*                    <Image key={index} src={selectedFiles[index].dataURL} alt="Selected Image" mx={2} my={2} />*/}
                    {/*                )}*/}
                    {/*            </Box>*/}
                    {/*        ))}*/}
                    {/*        /!* Add button to add more image inputs *!/*/}
                    {/*        <Button onClick={() => {*/}
                    {/*            imageRef.current.push(useRef()); // Add a new image input ref*/}
                    {/*        }} colorScheme="teal">*/}
                    {/*            Add More Images*/}
                    {/*        </Button>*/}
                    {/*    </Flex>*/}
                    {/*</ModalBody>*/}
                    <ModalFooter>
                        {/*<Button mr={3} onClick={handlePostCreation} isLoading={isLoading}>*/}
                        <Button colorScheme={'dark'} onClick={handleNext} disabled={selectedFiles.length === 0} >
                            Next
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal isOpen={isCapOpen} onClose={onCapClose} scrollBehavior={'inside'} size='3xl'>
                <ModalOverlay />
                <ModalContent  border={"1px solid gray"}>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    {/*<ModalBody pb={6}>*/}
                    {/*    <Input*/}
                    {/*        placeholder='Add title...'*/}
                    {/*        value={title}*/}
                    {/*        onChange={(e) => setTitle(e.target.value)}*/}
                    {/*    />*/}

                    {/*    {selectedFiles.length > 0 && (*/}
                    {/*    <Image  className={'w-full justify-center my-4'}  src={selectedFiles[0].dataURL} alt='Selected img' />*/}
                    {/*    )}*/}

                    {/*    <Input*/}
                    {/*        placeholder='Add note...'*/}
                    {/*        value={note}*/}
                    {/*        onChange={(e) => setNote(e.target.value)}*/}
                    {/*    />*/}

                    {/*    <Textarea*/}
                    {/*        mt={'4'}*/}
                    {/*        placeholder='Add caption...'*/}
                    {/*        value={caption}*/}
                    {/*        onChange={(e) => setCaption(e.target.value)}*/}
                    {/*    />*/}

                    {/*</ModalBody>*/}

                    <ModalBody pb={6}>
                        {selectedFiles.map((file, index) => (
                            <div key={index}>
                                <Input
                                  placeholder={`Caption for image ${index + 1}`}
                                  // ... (Implement logic to store individual captions)
                                />
                            </div>
            ))}
                        <Input
                            placeholder='Add title...'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        {selectedFiles.length > 0 && (
                        <Image  className={'w-full justify-center my-4'}  src={selectedFiles[0].dataURL} alt='Selected img' />
                        )}

                        <Input
                            placeholder='Add note...'
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />

                        <Textarea
                            mt={'4'}
                            placeholder='Add caption...'
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        />

                    </ModalBody>
                    <ModalFooter>
                        <div className={'w-full flex justify-between'}>
                            <Button onClick={handleBack} >
                                Back
                            </Button>
                            <Button colorScheme={'dark'} onClick={handlePostCreation} isLoading={isLoading} >
                                Post
                            </Button>
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default CreatePost

function useCreatePost() {
    const showToast = useShowToast();
    const [isLoading, setIsLoading] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    const createPost = usePostStore((state) => state.createPost);
    const userProfile = useProfileStore((state) => state.userProfile);

    const handleCreatePost = async (selectedFiles, title, note, caption) => {
        if (isLoading) return;
        if (!selectedFiles) throw new Error("Please select an image");
        setIsLoading(true);
        const newPost = {
            postURLs: [],
            title: title,
            note: note,
            caption: caption,
            saved: [],
            comments: [],
            createdAt: Date.now(),
            createdBy: authUser.uid,
            imageGroups: [], // Array to store image groups with captions and notes
        };

        try {
            const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
            const userDocRef = doc(firestore, "users", authUser.uid);
            // const imageRef = ref(storage, `posts/${postDocRef.id}`);
            const postURLs = []; // Array to store img URLs

            // for (const file of selectedFiles) {
            //     const imageRef = ref(storage, `posts/${postDocRef.id}/${file.name}`);
            //     await uploadString(imageRef, file, "data_url");
            //     const downloadURL = await getDownloadURL(imageRef);
            //     postURLs.push(downloadURL);
            // }
            for (const [index, file] of selectedFiles.entries()) {
                const imageRef = ref(storage, `posts/<span class="math-inline">\{postData\.id\}/</span>{file.name}`);
                const downloadURL = await uploadString(imageRef, file);
                newPost.imageGroups.push({
                    imageUrl: downloadURL,
                    caption: imageCaptions[index], // Add caption from imageCaptions array
                    note: imageNotes[index], // Add note from imageNotes array
                });
            }
            await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
            await updateDoc(postDocRef, { postURLs }); // Update with array of URLs

            newPost.postURLs = postURLs;

            if (userProfile.uid === authUser.uid) createPost({ ...newPost, id: postDocRef.id });

            showToast("Success", "Post created successfully", "success");
        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            setIsLoading(false);
        }
    };
    //         await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
    //         await uploadString(imageRef, selectedFiles, "data_url");
    //         const downloadURL = await getDownloadURL(imageRef);
    //
    //         await updateDoc(postDocRef, { imageURL: downloadURL });
    //
    //         newPost.imageURL = downloadURL;
    //
    //         if (userProfile.uid === authUser.uid) createPost({ ...newPost, id: postDocRef.id });
    //
    //         showToast("Success", "Post created successfully", "success");
    //     } catch (error) {
    //         showToast("Error", error.message, "error");
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    return { isLoading, handleCreatePost };
}

