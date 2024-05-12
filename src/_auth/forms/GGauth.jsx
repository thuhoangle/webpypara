import {Flex, Image} from "@chakra-ui/react";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth, firestore} from "@/firebase/firebase.js";
import useShowToast from "@/hook/useShowToast.js";
import {doc, getDoc, setDoc} from "firebase/firestore";
import useAuthStore from "@/store/authStore.js";

const GGauth = () => {
    const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore((state) => state.login)


    const handleGoogleAuth = async () => {
        try {
            const newUser = await signInWithGoogle();
            if(!newUser && error) {
                showToast('Error', error.message, 'error')
                return
            }
            const userRef = doc(firestore, "users", newUser.user.uid);
            const userSnap = await getDoc(userRef);

            // check if user exists ỏ not
            if (userSnap.exists()) {
                // login
                const userDoc = userSnap.data();
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
            } else {
                //sign up
                const userDoc = {
                    uid: newUser.user.uid,
                    email: newUser.user.email,
                    username: newUser.user.email.split("@")[0],
                    fullName: newUser.user.displayName,
                    bio: "",
                    profilePicURL: newUser.user.photoURL, //take phôt from mail acc
                    followers: [],
                    following: [],
                    createdAt: Date.now(),
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-data", JSON.stringify(userDoc));
                loginUser(userDoc)
            }
        } catch(error){
            showToast('Error', error.message, 'error')
        }
    }
    return (
        <Flex className={'justify-center items-center cursor-pointer'}
                onClick={handleGoogleAuth}>
            <Image src='/google.png' alt={'google'} className={'w-10 bg-white p-1.5 rounded-full border-[1px] border-solid border-black'} />
            {/*<span className={'mx-2 text-sm'}>Sign in with Google</span>*/}
        </Flex>
    )
}
export default GGauth
