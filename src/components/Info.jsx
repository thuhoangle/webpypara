import React from 'react'

import ava from "./../assets/ava.jpeg";
import { IoIosMore } from "react-icons/io";
import img from "../assets/coolncry.jpeg";

function Info() {
    return (
        <div className="lg:w-8/12 lg:mx-auto mb-8">

            <div className={'grid grid-cols-4 '}>
                <img src={ava} className={'rounded-full object-cover border-2 border-black w-36 h-36 mx-auto'}/>
                {/*<div className={'col-span-2'}>*/}
                <div className="col-span-2 text-left flex flex-col items-start justify-center">
                    <span className="text-3xl text-black font-semibold mr-4">shiba</span>
                    <span className="text-xl text-black font-medium mr-4">@shibapawpaw</span>
                </div>
                <div className={'self-center'}>
                    <div
                        className="cursor-pointer inline text-[15px] text-gray-700 p-1 px-4 border border-gray-200 rounded-full mr-4">Edit
                    </div>
                    <IoIosMore className={'cursor-pointer h-6 inline'}/>
                </div>
                {/*</div>*/}
            </div>
        </div>
        // </div>

        // <div className={'w-1/2 justify-center items-center'}>
        //     {/*justify-start*/}
        //     <div className={'flex flex-row justify-center items-center'}>
        //         <img src={ava} className={'w-28 h-28 rounded-full align-middle '}/>
        //         <div className={'flex flex-row justify-around'}>
        //             <div className={'flex flex-col items-start'}>
        //                 <p className={'font-bold text-[15px]'}>shiba</p>
        //                 <p className={'font-thin text-[10px]'}>@shibapawpaw</p>
        //             </div>
        //             <div className={'flex flex-row justify-end items-center hover:cursor-pointer'}>
        //                 <div className={'bg-white rounded-full border border-solid border-black mr-2'}>
        //                     <p className={'px-3 py-0.5 text-center text-black text-[10px]'}>Edit</p>
        //                 </div>
        //                 <IoIosMore/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Info
