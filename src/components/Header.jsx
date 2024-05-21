import React from 'react'
import logo from "@/assets/img.png";
import {AiOutlineMeh} from "react-icons/ai";
import Marquee from "react-fast-marquee";
import {Avatar} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        // <Box className={'fixed w-screen top-0 left-0 right-0 p-0 h-fit bg-blue-400'}>
        <div className={' w-screen top-0 left-0 right-0 p-0'}>
            <div className="my-2 flex justify-center bg-white  items-center ">
                <NavLink to={'/'}>
                    <Avatar size={'xl'} name={'logo'} src={logo} />
                </NavLink>
            </div>
            <Marquee autoFill={true} className={'bg-black text-bold text-[15px] align-middle py-1 mb-10'} >
                <p className={'text-white pr-2'}> DEVELOPED BY LE THU HOANG AND BUI DOAN THE SANG </p>
                <AiOutlineMeh className={'text-white pr-2 text-[25px]'} />
                <p className={'text-white pr-2'}> A PROJECT FOR WEBSITE APPLICATION DEVELOPMENT COURSE </p>
                <AiOutlineMeh className={'text-white pr-2 text-[25px]'} />
            </Marquee>
        </div>
        // </Box>
    )
}

export default Header
