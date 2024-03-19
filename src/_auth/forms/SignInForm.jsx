import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
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

const SignInForm = () => {
    return (
        <Card defaultValue="account" className="w-[410px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="LogIn">Log in</TabsTrigger>
                <TabsTrigger value="SignUp">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="mail">Email address</Label>
                            <Input id='name' placeholder="Enter your email"/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="pw">Password</Label>
                            <Input id="pw" type="password" placeholder="12345678"/>
                        </div>
                        <div className='flex items-start'>
                            <div className='flex items-start'>
                                <div className='flex items-start h-5'>
                                    <input id='remember'
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                    <Button>Save changes</Button>
            </CardFooter>
        </Card>
    </TabsContent>
    <TabsContent value="password">
        <Card>
            <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                    Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>


    )
}
export default SignInForm
