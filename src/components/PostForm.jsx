// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import * as z from 'zod'
// import {titleValid} from "@/lib/validation/index.js";
// import {Form, FormControl, FormField, FormItem, } from "@/components/ui/form.jsx";
// import {Input} from "@/components/ui/input.jsx";
// import {Button} from "@/components/ui/button.jsx";
// import {Textarea} from "@/components/ui/textarea.jsx";
// import FileUploader from "@/components/FileUploader.jsx";
// import PropTypes from 'prop-types';
//
//
// function PostForm(props) {
//     const { post } = props; // Destructure props for easier access
//
//     const form = useForm({
//         resolver: zodResolver(titleValid),
//         defaultValues: {
//             title: post ? post?.title : "",
//             file: [],
//             note: post ? post?.note : "",
//             caption: post ? post?.caption : ""
//
//         },
//     });
//     PostForm.propTypes = {
//         post: PropTypes.shape({ // Define the shape of the 'post' prop
//             title: PropTypes.string.isRequired, // Required string
//             file: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired, // Array of File objects (required)
//             note: PropTypes.string, // Optional string
//             caption: PropTypes.string, // Optional string
//         }),
//     };
//     function onSubmit(values) {
//         console.log(values);
//     }
//
//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-9 w-full mt-4">
//                 <FormField
//                     control={form.control}
//                     name="title"
//                     render={({field}) => (
//                         <FormItem>
//                             {/*ADD TITLE*/}
//                             {/*<FormLabel>Title</FormLabel>*/}
//                             <FormControl>
//                                 <Textarea placeholder='Add title' {...field} />
//                             </FormControl>
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="file"
//                     render={({field}) => (
//                         <FormItem>
//                             <FormControl>
//                                 <FileUploader
//                                     fieldChange={field.onChange}
//                                     mediaUrl={post?.imageUrl}
//                                 />
//                             </FormControl>
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="Note"
//                     render={({field}) => (
//                         <FormItem>
//                             {/*<FormLabel>Add note</FormLabel>*/}
//                             <FormControl>
//                                 <Input type="text" placeholder="Add note" {...field}/>
//                             </FormControl>
//                         </FormItem>
//                     )}
//                 />
//
//                 <FormField
//                     control={form.control}
//                     name="Caption"
//                     render={({field}) => (
//                         <FormItem>
//                             {/*<FormLabel>Add caption</FormLabel>*/}
//                             <FormControl>
//                                 <Input type="text" placeholder="Add caption" {...field}/>
//                             </FormControl>
//                         </FormItem>
//                     )}
//                 />
//                 <div className='flex gap-4 items-center justify-between'>
//                     <Button type='button' className='shad-button_dark_4'>Back</Button>
//                     <Button type='submit'>Submit</Button>
//                 </div>
//
//             </form>
//         </Form>
//     )
// }
// export default PostForm
