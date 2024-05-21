import axios from "axios";
import {useEffect, useState} from "react";
import useShowToast from "@/hook/useShowToast.js";
import useUserProfileStore from "@/store/ProfileStore.js";
import {getUser} from "@/services/theAPI.js";
const useGetUser = (userId) => {
    const [isLoading, setIsLoading] = useState(true);
    const showToast = useShowToast();
    const { userProfile, setUserProfile } = useUserProfileStore();

    useEffect(() => {
    const getUserProfile = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(getUser, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                )
                setUserProfile({userProfile: response.data.userProfile});
                console.log("fetch user data", response.data.userProfile);
            } catch (error) {
                showToast("fetch failed", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        }
            getUserProfile();
        }, [setUserProfile, userId, showToast]);

        return { isLoading, userProfile };
    }
export default useGetUser;