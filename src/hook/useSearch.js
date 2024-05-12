import React, {useState} from 'react'
import useShowToast from "@/hook/useShowToast.js";
import {collection, getDocs, query, where} from "firebase/firestore";
import {firestore} from "@/firebase/firebase.js";

const useSearch = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const showToast = useShowToast()

    const getUserProfile = async (username) => {
        try {
            const q = query(collection(firestore, 'users'), where('username', '==', username))
            const querySnapshot = await getDocs(q)
            if (querySnapshot.empty) {
                return ('Error', 'User not found', 'error')
            }
            querySnapshot.forEach(doc => {
                setUser(doc.data())
            })
        } catch (error) {
            showToast('Error', error.message, 'error')
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }


    return {isLoading, user, getUserProfile}
}
export default useSearch
