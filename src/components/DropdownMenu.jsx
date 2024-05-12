import React from 'react'
import * as HoverCard from '@radix-ui/react-hover-card';
import { Link as RouterLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
// import { IoCreateOutline, IoCloseSharp } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import {
    Tooltip, Link, Flex } from '@chakra-ui/react'
import useAuthStore from "@/store/authStore.js";
import SearchProfile from "@/components/search/SearchProfile.jsx";
const DropdownMenu = () => {
    const authUser = useAuthStore(state => state.user)


    return (
        <div className="absolute right-4"  >
        <div className="flex justify-end pt-3"  >
        <HoverCard.Root openDelay={300} closeDelay={100}>
            <HoverCard.Trigger className={'mx-1 p-3 rounded-full bg-zinc-200 cursor-pointer'}>
                <IoMdMenu className='h-6 w-6 cursor-pointer' />
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content>
                    <Flex direction={{base: 'horizontal', md:'column'}} gap={3}  cursor={'pointer'} className={'mt-2 bg-zinc-200 w-fit items-center rounded-full'}>
                        {/*{menuItems.map((item, index) => (*/}
                        {/*    <Tooltip key={index} hasArrow label={item.text} placement={'left'} openDelay={300}>*/}
                        {/*        <Link to={item.link || null} as={RouterLink} alignItems={'center'}  className={'rounded-full p-2 hover:bg-slate-50'} >*/}
                        {/*            {item.icon}*/}
                        {/*        </Link>*/}
                        {/*    </Tooltip>*/}
                        {/*))}*/}

                        <Tooltip label={"Home"} placement={'left'} openDelay={300} textColor='gray' bg='gray.50' >
                            <Link to="/" as={RouterLink} alignItems={'center'}  className={'rounded-full p-2 hover:bg-slate-50'} >
                                <RiHomeLine className={'w-6 h-6'}/>
                            </Link>
                        </Tooltip>

                        <Tooltip label={"Search"} placement={'left'} openDelay={300} textColor='gray' bg='gray.50' >
                            <div className={'rounded-full p-2 hover:bg-slate-50 items-center'}>
                                <SearchProfile/>
                            </div>
                        </Tooltip>

                        <Tooltip label={"Profile"} placement={'left'} openDelay={300} textColor='gray' bg='gray.50' >
                            <Link to={`/${authUser?.username}`} as={RouterLink} alignItems={'center'}  className={'rounded-full p-2 hover:bg-slate-50'} >
                                <FaRegCircleUser className={'w-6 h-6 '}/>
                            </Link>
                        </Tooltip>

                        <Tooltip label={"Log out"} placement={'left'} openDelay={300} textColor='gray' bg='gray.50' >
                            <Link to={'/auth'} as={RouterLink} alignItems={'center'}  className={'rounded-full p-2 hover:bg-slate-50'} >
                                <MdLogout className='w-7 h-7 text-red-500' />
                            </Link>
                        </Tooltip>

                    </Flex>
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
        </div>
        </div>
    )
}
export default DropdownMenu
