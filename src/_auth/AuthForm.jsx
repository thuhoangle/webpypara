import {Card, CardHeader, CardBody, CardFooter, InputRightElement, InputGroup, VStack} from '@chakra-ui/react'
import { Input, Heading, Flex, Spacer, Box } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react'
import {Button} from "@/components/ui/button.jsx";
import React, {useState} from "react";
import Login from "@/_auth/forms/Login.jsx";
import SignUp from "@/_auth/forms/SignUp.jsx";
import GGauth from "@/_auth/forms/GGauth.jsx";

const AuthForm = () => {
    const[isLogin, setIsLogin] = useState(true)
    // const [show, setShow] = useState(false)
    // const handleClick = () => setShow(!show)
    // const navigate = useNavigate() ;
    // const[inputs, setInputs] = useState({
    //     email:'',
    //     password:'',
    //     confirmPassword:'',
    // });
    // const handleAuth = () => {
    //     if(!inputs.email || !inputs.password || (!isLogin && !inputs.confirmPassword)){
    //         alert('Please fill in all fields');
    //         return;
    //     }
    //         navigate('/')
    // };

    // const isEmpty= inputs === ''

    return (
        // <>
        //     {isLogin ? <Login/> : <SignUp/>}
        //
        //     <Button type={'submit'} className='w-full flex flex-row items-center'>
        //         {isLogin ? "Log in" : "Sign up"}
        //     </Button>
        //
        //     <div className={'flex justify-center items-center mb-1'}>
        //         <Box mx={'2'} fontSize={14}>
        //             {isLogin ? "Don't have an account?" : "Already have an account?"}
        //         </Box>
        //         <Box onClick={() => setIsLogin(!isLogin)} className={'cursor-pointer text-sm text-blue-500'}>
        //             {isLogin ? "Sign up" : "Log in"}
        //         </Box>
        //     </div>
        // </>

        // <VStack spacing={4} align={'stretch'}>
        <Card>
            <CardHeader>
                {isLogin
                    ? <Heading size={'xl'}>Log in</Heading>
                    : <Heading size={'xl'}>Sign up</Heading>
                }
            </CardHeader>
            {/*<form onSubmit={handleSubmit} ref={loginForm}>*/}
            <CardBody className="space-y-2 w-[350px]">
                {isLogin ? <Login/> : <SignUp/>}
            </CardBody>

            <div className={'flex justify-center items-center py-2 gap-1 w-full'}>
                {/*<Box flex={2} h={'1px'} bg={'gray.400'}/>*/}
                <div className={'mx-1 text-sm text-gray-700'}>
                    {isLogin ? "Or log in with" : "Or sign up with" }
                </div>
                {/*<Box flex={2}  h={'1px'} bg={'gray.400'}/>*/}
            </div>
            <GGauth/>

            <div className={'flex justify-center items-center pt-4 mb-1'}>
                <Box mx={'2'} fontSize={14}>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                </Box>
                <Box onClick={() => setIsLogin(!isLogin)} className={'cursor-pointer text-sm font-semibold '}>
                    {isLogin ? "Sign up" : "Log in"}
                </Box>
            </div>
        </Card>
        // </VStack>

        //             {/*<FormControl className="flex flex-col gap-5 w-full mt-4">*/}
        //             <FormControl name="email" >
        //                 <FormLabel>Email address</FormLabel>
        //                 <Input type="email" placeholder="Enter your email"
        //                         value={inputs.email} onChange={(e) => setInputs({...inputs, email:e.target.value})}
        //                 />
        //                 {/*{isEmpty ? <FormErrorMessage>Email is required.</FormErrorMessage> : null }*/}
        //
        //             </FormControl>
        //             <FormControl name="password">
        //                 <FormLabel>Password</FormLabel>
        //                 {isLogin
        //                     ? <InputGroup size='md'>
        //                             <Input
        //                                 pr='4.5rem'
        //                                 type={show ? 'text' : 'password'}
        //                                 placeholder='Enter password'
        //                                 value={inputs.password}
        //                                 onChange={(e) => setInputs({...inputs, password:e.target.value})}
        //                             />
        //                             <InputRightElement width='4rem'>
        //                                 <Button variant={'ghost'} onClick={handleClick}>
        //                                     {show ? 'Hide' : 'Show'}
        //                                 </Button>
        //                             </InputRightElement>
        //                         </InputGroup>
        //
        //                     : ( <Input
        //                         pr='4.5rem'
        //                         type={show ? 'text' : 'password'}
        //                         placeholder='Enter password'
        //                         value={inputs.password}
        //                         onChange={(e) => setInputs({...inputs, password:e.target.value})}
        //                         />
        //                         )
        //                 }
        //                 <FormHelperText>Must be at least 8 characters</FormHelperText>
        //             </FormControl>
        //
        //             {!isLogin
        //                 ?
        //                     <FormControl name="confirmPassword" >
        //                         <FormLabel>Confirm password</FormLabel>
        //                         <Input
        //                             pr='4.5rem'
        //                             type={'password'}
        //                             placeholder='Enter password'
        //                             value={inputs.confirmPassword}
        //                             onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}
        //                         />
        //                     </FormControl>
        //                 : null
        //             }
        //
        //             {/*<div className={'flex flex-row w-full justify-between'}>*/}
        //             {/*    <Checkbox colorScheme='blackAlpha' defaultChecked>*/}
        //             {/*        Remember me*/}
        //             {/*    </Checkbox>*/}
        //
        //             {/*    <a href="/"*/}
        //             {/*       className="ms-auto text-sm hover:underline self-center active:text-gray-300 ">Lost*/}
        //             {/*        Password?</a>*/}
        //             {/*</div>*/}
        //
        //         </VStack>
        //     </CardBody>
        //     <CardFooter>
        //         <Button type={'submit'} className='w-full flex flex-row items-center' >
        //             {isLogin ? "Log in" : "Sign up"}
        //         </Button>
        //
        //     </CardFooter>
        //     <div className={'flex justify-center items-center mb-1'}>
        //         <Box mx={'2'} fontSize={14}>
        //             {isLogin ? "Don't have an account?" : "Already have an account?"}
        //         </Box>
        //         <Box onClick={() => setIsLogin(!isLogin)} className={'cursor-pointer text-sm text-blue-500'}>
        //             {isLogin ? "Sign up" : "Log in"}
        //         </Box>
        //     </div>
        //
        //     {/*</form>*/}
        // </Card>
    )
}
export default AuthForm
