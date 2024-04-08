import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth} from "@/_auth/AuthContext.jsx";

const RootLayout = () => {
    const user = useAuth(); // Replace with your authentication logic

    return user ? <Outlet/> : <Navigate to="/login"/>
}

//
// const RootLayout = () => {
//     return (
//         <div className='w-full md:flex'>
//             {/*<Header/>*/}
//
//
//             <section className='flex flex-1 h-full'>
//                 <Outlet/>
//             </section>
//         </div>
//     )
// }
export default RootLayout
