import React, { useEffect, useRef } from 'react'
// import { zodResolver } from "@hookform/resolvers/zod"
import * as Form from '@radix-ui/react-form';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {LoginValid } from "@/lib/validation/index.js";
import {useAuth} from "@/_auth/AuthContext.jsx";
// import {NavLink} from "react-router-dom";

const Login = () => {
    const {user, loginUser} = useAuth()
    const loginForm = useRef(null)
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = loginForm.current.email.value
        const password = loginForm.current.password.value

        const errors = LoginValid({email, password});

        if (Object.keys(errors).length > 0) {
            console.log(errors);
            return;
        }

        const userInfo = {email, password};
        loginUser(userInfo);
    }


    return (
        // <Tabs defaultValue="login" className="w-[410px]">
        //     <TabsList className="grid w-full grid-cols-2">
        //
        //         {/*<NavLink to={'/login'}>*/}
        //             <TabsTrigger value="login" className={'font-bold'}>Log in</TabsTrigger>
        //         {/*</NavLink>*/}
        //
        //         {/*<NavLink to={'/login'}>*/}
        //             <TabsTrigger value="signup" className={'font-bold'}>Register</TabsTrigger>
        //         {/*</NavLink>*/}
        //     </TabsList>
        //     <TabsContent value="login">
        <div className="bg-slate-300">
                <Card >
                    <CardHeader>
                        <CardTitle>Welcome back</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">

                    <Form.Root className="flex flex-col gap-6 w-full mt-4">
                        <form  onSubmit={handleSubmit} ref={loginForm}>

                            <Form.Field name="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control>
                                    <Input id='email' type="email" placeholder="Enter your email" {...field} />
                                </Form.Control>
                            </Form.Field>
                            <Form.Field name="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control>
                                    <Input required id="pw" type="password" placeholder="••••••••"/>
                                </Form.Control>
                            </Form.Field>
                            <div className='flex items-start'>
                                <div className='flex items-start'>
                                    <div className='flex items-start h-5'>
                                        <Checkbox id="terms" className={'w-4 h-4'}/>
                                    </div>
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ms-2"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <a href="#"
                                   className="ms-auto text-sm text-gray-700 hover:underline dark:text-blue-500">Lost
                                    Password?</a>
                            </div>

                            <CardFooter>
                                <Form.Submit>
                                    <Button className='w-full flex flex-row'>
                                        {/*{isLoading ? (*/}
                                        {/*"Please wait..." ) : "Log in"}*/}
                                    </Button>
                                </Form.Submit>
                            </CardFooter>
                        </form>
                    </Form.Root>
                    </CardContent>
                </Card>
        </div>
            // </TabsContent>

        //     <TabsContent value="signup">
        //         <Card>
        //             <CardHeader>
        //                 <CardTitle>Welcome</CardTitle>
        //             </CardHeader>
        //             <CardContent className="space-y-6">
        //                 <Form.Root>
        //                     <form ref={registerForm} onSubmit={handleSubmitSignup} className="flex flex-col gap-5 w-full mt-4">
        //                         <Form.Field name="email">
        //                                     <Form.Label>Email address</Form.Label>
        //                                     <Form.Control>
        //                                         <Input id='email' type="email" placeholder="Enter your email" {...field} />
        //                                     </Form.Control>
        //                         </Form.Field>
        //                         <Form.Field name="password">
        //                             <Form.Label>Password</Form.Label>
        //                             <Form.Control>
        //                                 <Input required id="pw" type="password" placeholder="••••••••"/>
        //                             </Form.Control>
        //                         </Form.Field>
        //
        //                         <Form.Field name="confirm">
        //                             <Form.Label>Confirm password</Form.Label>
        //                             <Form.Control>
        //                                 <Input id="confirm" type="password" placeholder="••••••••" required/>
        //                             </Form.Control>
        //                         </Form.Field>
        //
        //                         <CardFooter>
        //                             <Form.Submit>
        //                                 <Button className='w-full'>Create account</Button>
        //                             </Form.Submit>
        //                         </CardFooter>
        //                     </form>
        //                 </Form.Root>
        //             </CardContent>
        //         </Card>
        //     </TabsContent>
        // </Tabs>
    )
}
export default Login
