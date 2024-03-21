import React from 'react'
import Header from "@/components/Header.jsx";

const RootLayout = () => {
    return (
        <div className='w-full md:flex'>
            {/*<Header/>*/}


            <section className='flex flex-1 h-full'>
                <Outlet/>
            </section>
        </div>
    )
}
export default RootLayout
