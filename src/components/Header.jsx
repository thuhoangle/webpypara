import React from 'react'
import logo from "@/assets/img.png";
import {AiOutlineMeh} from "react-icons/ai";
import Marquee from "react-fast-marquee";

function Header() {
    return (
        <div className={'bg-white'}>
            <div className="my-2 flex justify-center  items-center ">
                <img src={logo} className={'w-28 h-28'}/>
            </div>
            <Marquee autoFill={true} className={'bg-black text-bold text-[15px] align-middle py-1 mb-10'} >
                <p className={'text-white pr-2'}> DEVELOPED BY LE THU HOANG AND BUI DOAN THE SANG </p>
                <AiOutlineMeh className={'text-white pr-2 text-[25px]'} />
                <p className={'text-white pr-2'}> A PROJECT FOR WEBSITE APPLICATION DEVELOPMENT COURSE </p>
                <AiOutlineMeh className={'text-white pr-2 text-[25px]'} />
            </Marquee>
        </div>
    )
}

export default Header
