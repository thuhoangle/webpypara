import React from 'react'
import logo from './../assets/img.png';
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { Avatar } from '@chakra-ui/react'
import {NavLink} from "react-router-dom";

function HeaderHome() {
    return (
        <div className={'w-screen'}>
            <div className={'px-7 py-2 flex justify-between items-center'}>
                <Avatar size={'xl'} name={'logo'} src={logo} />
                <div className={'cursor-pointer gap-10 items-center flex rounded-full bg-zinc-100 px-9 py-2'}>
                    <NavLink to={'/'}>
                        <GoHomeFill className={'w-6 h-6 text-gray-600 '}/>
                    </NavLink>
                    <FiSearch className={'text-gray-400 hover:text-gray-500 w-6 h-6 stroke-2 '}/>
                    <NavLink to={'/profile'}>
                        <FaRegCircleUser className={'text-zinc-400 w-6 h-6 hover:text-gray-500 '}/>
                    </NavLink>
                </div>
                <a
                    className="relative bg-white rounded-full border border-solid border-black"
                    href="Github↗"
                    target="_blank"
                >
                    <div
                        className="px-4 py-2 font-thin text-center text-black">
                        GITHUB↗
                    </div>
                </a>
            </div>
        </div>
    )
}

export default HeaderHome
