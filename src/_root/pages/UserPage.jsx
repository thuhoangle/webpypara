import React from 'react'
import logo from '../../assets/img.png';
import Marquee from "react-fast-marquee";
import UserPosts from "../../components/UserPosts.jsx";
import { AiOutlineMeh } from "react-icons/ai";
import Info from "../../components/Info.jsx";
function UserPage() {
    return (
        <div>
            <div className={'items-center justify-center'}>
                <img src={logo} className={'w-28 h-28 rounded-full'}/>
            </div>
            <Marquee autoFill={true} className={'bg-black text-bold text-[15px] align-middle py-1 my-10'} >
                    <p className={'text-white pr-2'}> DEVELOPED BY LE THU HOANG AND BUI DOAN THE SANG </p>
                    <AiOutlineMeh className={'text-white pr-2 text-[25px]'} />
                    <p className={'text-white pr-2'}> A PROJECT FOR WEBSITE APPLICATION DEVELOPMENT COURSE </p>
                    <AiOutlineMeh className={'text-white pr-2 text-[25px]'} />
            </Marquee>
            <Info></Info>
            <UserPosts></UserPosts>
        </div>
    )
}

export default UserPage
