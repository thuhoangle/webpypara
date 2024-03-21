import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import ava from "./../assets/ava.jpeg";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AiOutlineCloudUpload } from "react-icons/ai";


const CreatePost = () => {
    return (
    // z-index:660; right: 0px
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

                    <DialogFooter>
                        <Button type="submit">Next</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default CreatePost
