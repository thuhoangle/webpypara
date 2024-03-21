import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {signinValid, signupValid} from "@/lib/validation/index.js";




const SignUpForm = () => {

    return (
        <Tabs defaultValue="login" className="w-[410px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login" className={'font-bold'}>Log in</TabsTrigger>
                <TabsTrigger value="signup" className={'font-bold'}>Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <Card >
                        <CardHeader>
                            <CardTitle>Welcome back</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email address</Label>
                                <Input id='email' type="email" placeholder="Enter your email"/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="pw">Password</Label>
                                <Input required id="pw" type="password" placeholder="••••••••" />
                            </div>
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
                        </CardContent>
                        <CardFooter>
                            <Button className='w-full'>Log in</Button>
                        </CardFooter>

                </Card>

            </TabsContent>
            <TabsContent value="signup">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-1">
                            <Label htmlFor="email">Email address</Label>
                            <Input id='email' type="email" placeholder="Enter your email"/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="pw">Password</Label>
                            <Input id="pw" type="password" placeholder="••••••••" required/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="cfpw">Confirm password</Label>
                            <Input id="cfpw" type="password" placeholder="••••••••" required/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full'>Create account</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>


    )
}
export default SignUpForm
