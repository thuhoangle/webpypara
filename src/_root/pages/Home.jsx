import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Header from "../../components/Header.jsx";
import { RiFocus2Line } from "react-icons/ri";
import line from "../../assets/line.png";

const Home = () => {
    let Links =[
    {name: 'User', link: './'},
    ]
    return (
        <div>
            <Header></Header>
            <div className={'py-20 justify-center items-center flex flex-row gap-2'}>
                <RiFocus2Line/>
                <p className={'font-bold font-mono text-[35px] text-black'}> A website for Website Application
                    Development course.</p>
            </div>
            <div className={'w-3/4 float-right flex flex-col items-start  text-[35px] mt-[20px] text-left'}>
                <img src={line}/>
                <div className={'pl-3 flex flex-row align-middle gap-10'}>
                    <p className={'w-60 font-bold font-mono'}>UX/UI</p>
                    <p className={'font-sans text italic'}>Le Thu Hoang</p>
                </div>
                <img src={line}/>
                <div className={'flex flex-row align-middle gap-10 pl-3'}>
                    <p className={'w-60 font-bold font-mono'}>Front-end</p>
                    <p className={'font-sans text italic'}>Le Thu Hoang</p>
                </div>
                <img src={line}/>
                <div className={'flex flex-row align-middle gap-10 pl-3'}>
                    <p className={'w-60 font-bold font-mono'}>Back-end</p>
                    <p className={'font-sans text italic'}>Bui Doan The Sang</p>
                </div>
                <img src={line}/>

                <div className={'flex flex-row gap-20'}>
                    <a href={"https://github.com/thuhoangle"} target={'_blank'}
                       className={'mt-[20px] bg-white rounded-full border border-black'}>
                        <div className={'px-4 py-2 font-mono font-thin text-[20px] text-black text-center'}>GITHUB↗
                        </div>
                    </a>
                    <a href={"https://www.facebook.com/"} target={'_blank'}
                       className={'mt-[20px] bg-white rounded-full border border-black'}>
                        <div className={'px-4 py-2 font-mono font-thin text-[20px] text-black text-center'}>REPORT↗
                        </div>
                    </a>
                </div>
            </div>


        </div>

    )
}

export default Home
