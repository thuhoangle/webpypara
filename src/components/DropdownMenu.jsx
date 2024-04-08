import React from 'react'
import * as HoverCard from '@radix-ui/react-hover-card';
import { Link as RouterLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoCreateOutline, IoCloseSharp } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import {
    Tooltip, Link, Flex } from '@chakra-ui/react'
const DropdownMenu = () => {
    const menuItems =[
        {
            icon: <RiHomeLine className={'w-6 h-6'}/>,
            text: "Home",
            link: "/",
        },
        {
            icon: <FiSearch className={'w-6 h-6 '}/>,
            text: "Search",
        },
        {
            icon: <FaRegCircleUser className={'w-6 h-6 '}/>,
            text: "Profile",
            link: "/shibapawpaw",
        },
        // {
        //     icon: <FaRegBookmark className={'w-6 h-6 '}/>,
        //     text: "Saved",
        //     link: '/saved',
        // },
        {
            icon: <IoCreateOutline className={'w-7 h-7 stroke-2'}/>,
            text: "Create Post",
        },
        {
            icon: <MdLogout className='w-7 h-7 text-red-500' />,
            text: "Log out",
            link: '/auth',
        }
    ]

    return (
        <div className="flex justify-end pt-3"  >
        <HoverCard.Root openDelay={300} closeDelay={100}>
            <HoverCard.Trigger className={'mx-1 p-3 rounded-full bg-zinc-200 cursor-pointer'}>
                <IoMdMenu className='h-6 w-6 cursor-pointer' />
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content>
                    <Flex direction={'column'} gap={3}  cursor={'pointer'} className={'mt-2 bg-zinc-200 w-fit items-center rounded-full'}>
                        {menuItems.map((item, index) => (
                            <Tooltip key={index} hasArrow label={item.text} placement={'left'} openDelay={300}>
                                <Link to={item.link || null} as={RouterLink}  alignItems={'center'}  className={'rounded-full p-2 hover:bg-slate-50'} >
                                    {item.icon}
                                </Link>
                            </Tooltip>
                        ))}
                    </Flex>
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
        </div>
    )
}
export default DropdownMenu
