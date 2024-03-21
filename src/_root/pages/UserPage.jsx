import React from 'react'
import logo from '../../assets/img.png';
import UserPosts from "../../components/UserPosts.jsx";
import { AiOutlineMeh } from "react-icons/ai";
import Info from "../../components/Info.jsx";
import Header from "@/components/Header.jsx";
import CreatePost from "@/components/createPost.jsx";
function UserPage() {
    return (
        <div className={'bg-gray-200'}>
            <Header></Header>
            <Info></Info>
            <UserPosts></UserPosts>
            <CreatePost></CreatePost>
        </div>
    )
}

export default UserPage
