import useAuthStore from "@/store/authStore.js";
import useProfileStore from "@/store/ProfileStore.js";
import useShowToast from "@/hook/useShowToast.js";
import {firestore, storage} from "@/firebase/firebase.js";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import {doc, updateDoc} from "firebase/firestore";
import {useState} from "react";

const useEditProfile = () => {
    const [isUpdating, setIsUpdating] = useState(false);

    const authUser = useAuthStore((state) => state.user);
    const setAuthUser = useAuthStore((state) => state.setUser);
    const setUserProfile = useProfileStore((state) => state.setUserProfile);

    const showToast = useShowToast();

    const editProfile = async (inputs, selectedFile) => {
        if (isUpdating || !authUser) return;
        setIsUpdating(true);

        //store pic in Storage of firebase, pic's name == uid of user
        const storageRef = ref(storage, `profilePics/${authUser.uid}`);
        const userDocRef = doc(firestore, "users", authUser.uid);

        let URL = "";
        try {
            if (selectedFile) {
                //upload pic to storage cloud
                await uploadString(storageRef, selectedFile, "data_url");
                URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
            }

            const updatedUser = {
                ...authUser,
                fullName: inputs.fullName || authUser.fullName,
                username: inputs.username || authUser.username,
                bio: inputs.bio || authUser.bio,
                profilePicURL: URL || authUser.profilePicURL,
            };

            await updateDoc(userDocRef, updatedUser);
            localStorage.setItem("user-info", JSON.stringify(updatedUser));
            setAuthUser(updatedUser);
            setUserProfile(updatedUser);
            showToast("Success", "Profile updated successfully", "success");
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    };

    return { editProfile, isUpdating };
};

export default useEditProfile;