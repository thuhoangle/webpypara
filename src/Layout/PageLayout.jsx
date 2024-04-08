import { Flex, Box } from '@chakra-ui/react'
import {Header} from "@/components/index.js";
import {useLocation} from "react-router-dom";

const PageLayout = ({children}) => {
    const {pathname} = useLocation()

    return (
        <Flex direction={'column'}>
            {pathname !== '/auth' && pathname !== '/'  ? (
                <Box h={"145px"} position={"sticky"} top={0} zIndex={1} className={'bg-white '}>
                    <Header/>
                </Box>
            ) : null}
            <Box flex={1} h={'calc(100%-145px)'}>
                {children}
            </Box>
        </Flex>
    )
}
export default PageLayout
