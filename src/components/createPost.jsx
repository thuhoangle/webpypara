import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import ava from "./../assets/ava.jpeg";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AiOutlineCloudUpload } from "react-icons/ai";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form.jsx";
// import PostForm from "@/components/PostForm.jsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {titleValid} from "@/lib/validation/index.js";
import {Textarea} from "@/components/ui/textarea.jsx";


const form = useForm({
    resolver: zodResolver(titleValid),
    defaultValues: {
        title: "",
        file: [],
        note:"",
        caption: ""

        // title: post ? post?.title : "",
        // file: [],
        // note: post ? post?.note : "",
        // caption: post ? post?.caption : ""

    },
});
function onSubmit(values) {
    console.log(values);
}
const CreatePost = () => {
    return (
        <div >
            <Dialog>
                <DialogTrigger asChild >
                    <AiFillPlusCircle className={' w-[50px] h-[50px] justify-end items-end '}/>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        {/*<DialogTitle>Create Post</DialogTitle>*/}
                        <div className="flex justify-start items-center space-x-2">
                            <span className='relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full '>
                                <img src={ava} className='h-full w-full'/>
                            </span>
                            <div>
                                <p className='text-lg font-medium leading-none'>Shiba</p>
                            </div>
                        </div>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-9 w-full max-x-5xl">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({field}) => (
                                    <FormItem>
                                        {/*ADD TITLE*/}
                                        {/*<FormLabel>Title</FormLabel>*/}
                                        <FormControl>
                                            <Textarea placeholder='Add title' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file"
                               className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <AiOutlineCloudUpload />
                                    {/*<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>*/}
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                    className="font-semibold">Click to upload</span> or drag and drop</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden"/>
                        </label>
                    </div>
                            <FormField
                                control={form.control}
                                name="Note"
                                render={({field}) => (
                                    <FormItem>
                                        {/*<FormLabel>Add note</FormLabel>*/}
                                        <FormControl>
                                            <Input type="text" placeholder="Add note" {...field}/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="Caption"
                                render={({field}) => (
                                    <FormItem>
                                        {/*<FormLabel>Add caption</FormLabel>*/}
                                        <FormControl>
                                            <Input type="text" placeholder="Add caption" {...field}/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>

                    {/*    <PostForm/>*/}
                    <DialogFooter>
                        <div className='flex gap-4 items-center justify-between'>
                            <Button type='button' className='shad-button_dark_4'>Back</Button>
                            <Button type='submit'>Submit</Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default CreatePost
