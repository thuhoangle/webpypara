// import React, {useEffect, useRef, useState} from 'react'
import { useState} from 'react'
import { Input } from "@/components/ui/input"
import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    InputGroup,
    InputRightElement,
    // Alert, AlertIcon
} from "@chakra-ui/react";
import useLogin from "@/hook/useLogin.js";
// import {useNavigate} from "react-router-dom";
// import useShowToast from "@/hook/useShowToast.js";
// import useAuthStore from "@/store/authStore.js";
// import axios from "axios";

const Login = () => {
    const { inputs, setInputs, login, loading } = useLogin();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show)
    // const navigate = useNavigate();
    // const showToast = useShowToast();
    // const setUser = useAuthStore(state => state.setUser );
    // const[inputs, setInputs] = useState({
    //     email:'',
    //     password:'',
    // });

                return (
        <>
            <form onSubmit={login}>
            <FormControl name="email" >
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email"
                       value={inputs.email} onChange={(e) => setInputs({...inputs, email:e.target.value})}
                       // value={inputs.email} onChange={handleInputChange}
                />
                {/*{isEmpty ? <FormErrorMessage>Email is required.</FormErrorMessage> : null }*/}

            </FormControl>
            <FormControl name="password">
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            // value={inputs.password}
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password:e.target.value})}
                            // onChange={handleInputChange}
                        />
                        <InputRightElement width='4rem'>
                            <Button variant={'ghost'} onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                </InputGroup>
                <FormHelperText>Must be at least 6 characters</FormHelperText>
            </FormControl>

            {/*{error && (*/}
            {/*    <Alert status={'error'} className={'text-sm p-2 rounded-e'}>*/}
            {/*        <AlertIcon/>*/}
            {/*        {error.message}*/}
            {/*    </Alert>*/}
            {/*)}*/}
            <Button colorScheme={'dark'} type={'submit'} className='w-full flex flex-row items-center' isLoading={loading}
                    // onClick={() => login(inputs)}
            >
                Log in
            </Button>
            </form>


            {/*<div className={'flex justify-center items-center mb-1'}>*/}
            {/*    <Box mx={'2'} fontSize={14}>*/}
            {/*        Don't have an account?*/}
            {/*    </Box>*/}
            {/*    <Box onClick={() => setIsLogin(!isLogin)} className={'cursor-pointer text-sm text-blue-500'}>*/}
            {/*        Sign up*/}
            {/*    </Box>*/}
            {/*</div>*/}
        </>



        //
        // <div className="bg-slate-300">
        //         <Card >
        //             <CardHeader>
        //                 <CardTitle>Welcome back</CardTitle>
        //             </CardHeader>
        //             <CardContent className="space-y-6">
        //
        //             <Form.Root className="flex flex-col gap-6 w-full mt-4">
        //                 <form  onSubmit={handleSubmit} ref={loginForm}>
        //
        //                     <Form.Field name="email">
        //                         <Form.Label>Email address</Form.Label>
        //                         <Form.Control>
        //                             <Input id='email' type="email" placeholder="Enter your email" {...field} />
        //                         </Form.Control>
        //                     </Form.Field>
        //                     <Form.Field name="password">
        //                         <Form.Label>Password</Form.Label>
        //                         <Form.Control>
        //                             <Input required id="pw" type="password" placeholder="••••••••"/>
        //                         </Form.Control>
        //                     </Form.Field>
        //                     <div className='flex items-start'>
        //                         <div className='flex items-start'>
        //                             <div className='flex items-start h-5'>
        //                                 <Checkbox id="terms" className={'w-4 h-4'}/>
        //                             </div>
        //                             <label
        //                                 htmlFor="terms"
        //                                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ms-2"
        //                             >
        //                                 Remember me
        //                             </label>
        //                         </div>
        //                         <a href="#"
        //                            className="ms-auto text-sm text-gray-700 hover:underline dark:text-blue-500">Lost
        //                             Password?</a>
        //                     </div>
        //
        //                     <CardFooter>
        //                         <Form.Submit>
        //                             <Button className='w-full flex flex-row'>
        //                                 {/*{isLoading ? (*/}
        //                                 {/*"Please wait..." ) : "Log in"}*/}
        //                             </Button>
        //                         </Form.Submit>
        //                     </CardFooter>
        //                 </form>
        //             </Form.Root>
        //             </CardContent>
        //         </Card>
        // </div>

    )
}
export default Login
