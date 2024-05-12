import { create } from "zustand";

//store user profile by username
const useProfileStore = create((set) => ({
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile }),
}))
export default useProfileStore
