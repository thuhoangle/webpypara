import { Container, Flex, Box, VStack } from '@chakra-ui/react'
import AuthForm from '@/_auth/AuthForm'

const AuthPage = () => {
    return (
        <Flex minH={'100vh'} className={'min-h-screen justify-center items-center px-4 '}>
            <Container maxW={'container.lg'} className='p-0 flex flex-row justify-between items-center gap-2.5'>
                {/*<div className={'flex flex-row justify-between items-center gap-2.5'}>*/}
                    <Box display={{base: 'none', md: 'block'}} className={'w-2/5'}>
                        <p className="text-6xl font-bold text-center text-black leading-relaxed">Welcome to
                           <span className="text-7xl font-bold text-center text-black"> Webpybara</span>
                        </p>
                    </Box>
                    <VStack spacing={4} align={'stretch'}>
                        <AuthForm/>
                    </VStack>
                {/*</div>*/}
            </Container>
        </Flex>
    )
}
export default AuthPage
