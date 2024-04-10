import useShowToast  from "@/hook/useShowToast.js";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth, firestore} from "@/firebase/firebase.js";
import { collection, doc, getDoc } from "firebase/firestore";

const useLogin = () => {
    const showToast = useShowToast();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
        ] = useSignInWithEmailAndPassword(auth);

    const login = async (inputs) => {
        if(!inputs.email || !inputs.password){
            return showToast('Error', 'Please fill in all fields', 'error')
        }
        try{
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if(userCred){
                const docRef = doc(firestore, "users", userCred.user.uid);
                const docSnap = await getDoc(docRef);
                localStorage.setItem('user-data', JSON.stringify(docSnap.data()));

            }

        }catch (error){
            showToast('Error', error.message, 'error')
        }
    }
    return {loading, error, login}

}
export default useLogin
