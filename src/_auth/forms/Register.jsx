import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
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
// import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {signinValid, signupValid} from "@/lib/validation/index.js";




const Register = () => {
    const isLoading = false;
    // Define your form.
    const formIn = useForm({
        resolver: zodResolver(signinValid),
        defaultValues: {
            email: '',
            password: "",
        },
    });
    const formUp = useForm({
        resolver: zodResolver(signupValid),
        defaultValues: {
            email: '',
            password: "",
            confirm: "",
        },
    });
    function onSubmit(values) {
        console.log(values);
    }

    // async function onSubmit(values: z.infer<typeof formSchema>) {
    //     // const newUser = await createUserAccount(values)
    // }

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

                    <Form {...formIn}>
                        <form onSubmit={formIn.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                            <FormField
                                control={formIn.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email address</FormLabel>
                                        <FormControl>
                                            <Input id='email' type="email" placeholder="Enter your email" {...field} />
                                        </FormControl>
                                    </FormItem>
                                    )}
                                />
                            <FormField
                                control={formIn.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input required id="pw" type="password" placeholder="••••••••"/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
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
                                <Button className='w-full flex flex-row'>
                                    {isLoading ? (
                                    "Please wait..." ) : "Log in"}
                                </Button>
                            </CardFooter>
                        </form>
                    </Form>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="signup">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Form {...formUp}>
                            <form onSubmit={formIn.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                                <FormField
                                    control={formUp.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email address</FormLabel>
                                            <FormControl>
                                                <Input id='email' type="email" placeholder="Enter your email" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={formUp.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input required id="pw" type="password" placeholder="••••••••"/>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={formUp.control}
                                    name="confirm"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Confirm password</FormLabel>
                                            <FormControl>
                                                <Input id="confirm" type="password" placeholder="••••••••" required/>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <CardFooter>
                                    <Button className='w-full'>Create account</Button>
                                </CardFooter>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )}
export default Register
