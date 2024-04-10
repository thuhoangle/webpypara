import {Flex, Image} from "@chakra-ui/react";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth, firestore} from "@/firebase/firebase.js";
import useShowToast from "@/hook/useShowToast.js";
import {doc, setDoc} from "firebase/firestore";

const GGauth = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const showToast = useShowToast();


    const handleGoogleAuth = async () => {
        try {
            const newUser = await signInWithGoogle();
            if(!newUser && error) {
                showToast('Error', error.message, 'error')
                return
            }
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: newUser.user.email.split("@")[0], //take the part before @
                    username: newUser.user.displayName,
                    bio: '',
                    profilePic: newUser.user.photoURL, //take phôt from mail acc
                    createdAt: Date.now(),
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem('user-data', JSON.stringify(userDoc));
            }
        } catch(error){
            showToast('Error', error.message, 'error')
        }
    }
    return (
        <Flex className={'justify-center items-center cursor-pointer'}
                onClick={handleGoogleAuth()}>
            <Image src='/google.png' alt={'google'} className={'w-10 bg-white p-1.5 rounded-full border-[1px] border-solid border-black'} />
            {/*<span className={'mx-2 text-sm'}>Sign in with Google</span>*/}
        </Flex>
    )
}
export default GGauth
