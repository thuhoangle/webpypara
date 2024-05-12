import React, {useRef} from 'react'
import * as Dialog from "@radix-ui/react-dialog";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Avatar, Button} from "@chakra-ui/react";
import  {Textarea} from "@/components/ui/textarea.jsx";
import {useState} from "react";
import useShowToast from "@/hook/useShowToast.js";
import usePreviewImg from "@/hook/usePreviewImg.js";
import useAuthStore from "@/store/authStore.js";
import useEditProfile from "@/hook/useEditProfile.js";

const EditProfile = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        bio: ''
    });
    const authUser = useAuthStore((state) => state.user);
    const fileRef = useRef(null);
    const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
    const { isUpdating, editProfile } = useEditProfile();
    const showToast = useShowToast();

    const handleEditProfile = async () => {
        try {
            await editProfile(inputs, selectedFile);
            setSelectedFile(null);
            // onClose();
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    };


    return (
        <div>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <Button variant="outline" size={{ base: "xs", md: "sm" }}  className={'rounded-full px-4 py-2 border-black'}>Edit Profile</Button>
                </Dialog.Trigger>
                <Dialog.Portal >
                    <Dialog.Overlay className="bg-gray-400 data-[state=open]:bg-opacity-70 fixed inset-0"/>
                    <Dialog.Content
                        className={' top-[22%] left-[35%] bg-white max-w-[450px] data-[state=open]:animate-contentShow fixed  max-h-[85vh] w-[90vw] rounded-[6px] p-[25px] focus:outline-none'}>
                        <Dialog.Title className={'font-bold text-xl'}>Edit profile</Dialog.Title>

                        <div className="grid gap-4 py-4 mt-5">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Avatar
                                    size='xl'
                                    src={selectedFile || authUser.profilePicURL}
                                    border={"2px solid white "}
                                />
                                <Label htmlFor="change-ava" className="">
                                    <Button variant={'ghost'} className={'bg-white w-fit font-medium shadow-sm text-black hover:bg-gray-100'}  onClick={() => fileRef.current.click()}>
                                        Edit Profile Picture
                                    </Button>
                                </Label>
                                {/*'hidden' in input make Input invisible, ref to gán chức năng của input lên button above*/}
                                <Input type='file' hidden ref={fileRef} onChange={handleImageChange} />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    className="shadow-sm col-span-3"
                                    id="name"
                                    placeholder="Enter new name"
                                    value={inputs.fullName || authUser.fullName}
                                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input
                                    id="username"
                                    placeholder="Enter new username"
                                    value={inputs.username || authUser.username}
                                    className="shadow-sm col-span-3"
                                    onChange={(e) => setInputs({...inputs, username: e.target.value})}
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="desp" className="text-right">
                                    Description
                                </Label>
                                <Textarea
                                    placeholder=""
                                    className="shadow-sm resize-none col-span-3 text-sm"
                                    value={inputs.bio || authUser.bio}
                                    onChange={(e) => setInputs({...inputs, bio: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="mt-[25px] flex justify-end">
                            <Dialog.Close asChild >
                                <Button colorScheme={'dark'} isLoading={isUpdating} onClick={handleEditProfile}>Save changes</Button>
                            </Dialog.Close>
                        </div>

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}

export default EditProfile
