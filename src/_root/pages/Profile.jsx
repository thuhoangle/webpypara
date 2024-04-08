import React from 'react'
import DropdownMenu from "@/components/DropdownMenu.jsx";
import {Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import Info from "@/components/Info.jsx";
import Tabs from "@/components/profile/Tabs.jsx";
import Posts from "@/components/profile/Posts.jsx";
import MusicBox from "@/components/musicBox.jsx";
const Profile = () => {
    return (
        <Grid templateColumns='200px auto 200px'
              templateAreas={`"sidebar1 main sidebar2"`}
        >
            <GridItem bg='orange.300' area={'sidebar1'}>
                <MusicBox/>
            </GridItem>
            <GridItem area={'main'} className={'py-2'}>
                <Info/>
                <Tabs/>
                <Posts/>
            </GridItem>
            <GridItem pr='2' bg='green.300' area={'sidebar2'} >
                <div className={''}>
                    <DropdownMenu/>
                </div>
            </GridItem>
        </Grid>


    )
}
export default Profile
