import React, {useState} from 'react'
import {
    Alert, AlertIcon,
    Box,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    VStack
} from "@chakra-ui/react";
import {Button} from "@/components/ui/button.jsx";
import useSignUpwEmailPassword from "@/hook/useSignUpwEmailPassword.js";

const SignUp = () => {
    const[inputs, setInputs] = useState({
        email:'',
        username:'',
        password:'',
        confirmPassword:'',
    });

    const {loading, error, signup} = useSignUpwEmailPassword();
    return (
        <>

                <FormControl name="email" >
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder="Enter your email"
                           value={inputs.email} onChange={(e) => setInputs({...inputs, email:e.target.value})}
                    />
                </FormControl>
                <FormControl name="username" >
                    <FormLabel>Username</FormLabel>
                    <Input type="text" placeholder="Enter username"
                           value={inputs.username} onChange={(e) => setInputs({...inputs, username:e.target.value})}
                    />
                </FormControl>
                <FormControl name="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                                pr='4.5rem'
                                type={'password'}
                                placeholder='Enter password'
                                value={inputs.password}
                                onChange={(e) => setInputs({...inputs, password:e.target.value})}
                    />
                    <FormHelperText>Must be at least 6 characters</FormHelperText>
                </FormControl>
                <FormControl name="confirmPassword" >
                        <FormLabel>Confirm password</FormLabel>
                        <Input
                            pr='4.5rem'
                            type={'password'}
                            placeholder='Enter password'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}
                        />
                </FormControl>

                    {error && (
                        <Alert status={'error'} className={'text-sm p-2 rounded-e'}>
                            <AlertIcon/>
                            {error.message}
                        </Alert>
                    )}
                <Button type={'submit'} className='w-full flex flex-row items-center '
                        isLoading={loading}
                        onClick={() => signup(inputs)}>
                    Sign up
                </Button>

            {/*<div className={'flex justify-center items-center mb-1'}>*/}
            {/*    <Box mx={'2'} fontSize={14}>*/}
            {/*        Already have an account?*/}
            {/*    </Box>*/}
            {/*    <Box onClick={() => setIsLogin(!isLogin)} className={'cursor-pointer text-sm text-blue-500'}>*/}
            {/*        Log in*/}
            {/*    </Box>*/}
            {/*</div>*/}

</>
    )
}
export default SignUp
