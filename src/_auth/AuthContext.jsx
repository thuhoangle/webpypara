import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

        const [loading, setLoading] = useState(true)
        const [user, setUser] = useState(null)

        useEffect(() => {
            setLoading(false)
         }, [])

         const loginUser = async (userInfo) => {
            setLoading(true)
             console.log(userInfo)

             try{
                 let response = await account.createSession(userInfo.email, userInfo.password);
                 let accountDetails = await account.get();
                 setUser(accountDetails)
             }catch(error){
                 console.error(error)
             }
             setLoading(false)

         }

         const logoutUser = async () => {
             await account.deleteSession('current');
             setUser(null)

         }

         const registerUser = async (userInfo) => {
            setLoading(true)
            console.log(userInfo)
            try{
                let response = await account.create(userInfo.email, userInfo.password);

                await account.createEmailSession(userInfo.email, userInfo.password)
                let accountDetails = await account.get();
                setUser(accountDetails)
                navigate('/')
            }catch(error){
                console.error(error)
            }

             setLoading(false)
         }

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

//Custom Hook
export const useAuth = ()=> {return useContext(AuthContext)}

export default AuthContext;