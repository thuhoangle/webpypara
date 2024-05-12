import {Flex, Box, Spinner} from '@chakra-ui/react'
import {Header} from "@/components/index.js";
import {useLocation} from "react-router-dom";
import {auth} from "@/firebase/firebase.js";
import {useAuthState} from "react-firebase-hooks/auth";

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
    const [user, loading, error] = useAuthState(auth);

    const checkUserAuth = !user && loading
    if(checkUserAuth){
        return <PageLayoutSpinner/>
    }
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

const PageLayoutSpinner = () => {
    return (
        <Flex justify={'center'} align={'center'} h={'100vh'}>
            <Spinner size={'xl'}/>
        </Flex>
    )
}
