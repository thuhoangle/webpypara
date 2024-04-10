import {useSignOut} from "react-firebase-hooks/auth";
import {auth} from "@/firebase/firebase.js";
import useShowToast from "@/hook/useShowToast.js";

const useLogout = () => {
    const [signOut, isLoggingOut, error] = useSignOut(auth);
    const showToast = useShowToast();

    const handleLogout = async () => {
        try{
            await signOut();
            localStorage.removeItem('user-data');
            console.log("logged out")
            // showToast('Success', 'You have successfully logged out', 'success')
        }catch (error){
            showToast('Error', error.message, 'error')
        }
    }
    return {handleLogout, isLoggingOut, error}
}
export default useLogout
