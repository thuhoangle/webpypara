import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth, firestore} from "@/firebase/firebase.js";
import { doc, setDoc, query, where, collection, getDocs } from "firebase/firestore";
import useShowToast from "@/hook/useShowToast.js";
import useAuthStore from "@/store/authStore.js";

const useSignUpwEmailPassword = () => {
    const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore(state => state.login)

    const signup = async (inputs) => {
        if(!inputs.email || !inputs.password || !inputs.username){
            showToast('Error', 'Please fill in all fields', 'error')
            return;
        }

        //for unique username
        const usersRef = collection(firestore, "users");
        // Create a query against the collection.
        const q = query(usersRef, where("username", "==", inputs.username));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty){
            showToast('Error', 'Username already taken', 'error')
            return;
        }

        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser && error){ // if there is no new user and an error
                showToast('Error', error.message, 'error')
                return
            }
            if (newUser){
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    bio: '',
                    profilePic: '',
                    followers: [],
                    following: [],
                    createdAt: Date.now(),
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem('user-data', JSON.stringify(userDoc));
                loginUser(userDoc)
            }
        }catch (error){
            showToast('Error', error.message, 'error')
        }
    }
    return { loading, error, signup}
}
export default useSignUpwEmailPassword
