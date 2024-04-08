



// import React, {useCallback, useState} from 'react'
// import { FileWithPath, useDropzone } from 'react-dropzone'
// import { AiOutlineCloudUpload } from "react-icons/ai";
// import {string} from "zod";
//
// function FileUploader(props) {
//     const { fieldChange, mediaUrl } = props;
//
//     const [file, setFile] = React.useState([]); // Array to hold selected files
//     const [fileUrl, setFileUrl] = React.useState(''); // URL of the first selected file
//
//     // Function to handle file drop event (assuming use of a library like react-dropzone)
//     const onDrop = React.useCallback((acceptedFiles) => {
//         setFile(acceptedFiles); // Update state with dropped files
//         fieldChange(acceptedFiles); // Call callback function with dropped files (assuming fieldChange is a prop function)
//         setFileUrl(URL.createObjectURL(acceptedFiles[0])); // Generate URL for the first file
//     }, [file]); // Dependency array includes only 'file' for optimization
//
//     const {getRootProps, getInputProps} = useDropzone({
//         onDrop,
//         accept: {
//         'image/*': ['.png', '.jgeg', '.jpg'],
//         }
//     })
//
//     return (
//         <div {...getRootProps()} className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
//             <input {...getInputProps()} className='cursor-pointer'/>
//             {
//                 fileUrl ? (
//
//                     <div>test1</div>
//                 ) : (
//                     // dont have any file yet
//                     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                         <AiOutlineCloudUpload />
//                         <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                             <span className="font-semibold">Click to upload</span> or drag and drop</p>
//                     </div>
//                     )
//
//             }
//         </div>
//     )
// }
// export default FileUploader
