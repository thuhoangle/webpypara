import React from 'react'
import logo from './../assets/img.png';
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";

function HeaderHome() {
    return (
        <div className={'w-screen'}>
            <div className={'px-7 py-2 flex justify-between items-center'}>
                <img src={logo} className={'logo'}/>
                <div className={'cursor-pointer gap-10 items-center flex rounded-3xl bg-zinc-100 px-9 py-2'}>
                    <GoHomeFill className={'w-7 h-7 '}/>
                    <FiSearch className={'text-gray-400 w-7 h-7 stroke-1 '}/>
                    <div>
                        <FaRegCircleUser className={'text-gray-400 w-7 h-7 '}/>
                    </div>
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
