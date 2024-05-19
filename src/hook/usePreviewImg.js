import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const showToast = useShowToast();
    const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

    const handleImageChange = (e) => {
        const files = e.target.files;

        if(!files || files.length === 0) {
            showToast("Error", "Please select an image file", "error");
            setSelectedFiles([]);
            return;
        }

        const validImg = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith("image/")) {
                if (file.size > maxFileSizeInBytes) {
                    showToast("Error", `File "${file.name}" size must be less than 2MB`, "error");
                    continue;
                }
                validImg.push(file);
            } else {
                showToast("Error", `File "${file.name}" is not an image file`, "error");
            }
        }

        const filePromises = validImg.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve({file, dataURL: reader.result});
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        });

        Promise.all(filePromises)
            .then((files) => {
                setSelectedFiles(files);
            })
            .catch((error) => {
                showToast("Error", error.message, "error");
            });

        // setSelectedFiles(
        //     validImg.map((file) => {
        //         const reader = new FileReader();
        //         reader.onloadend = () => {
        //             // setSelectedFile(reader.result);
        //             // setSelectedFiles((prevFiles) => [
        //             //     ...prevFiles,
        //             //     {file, dataURL: reader.result},
        //             // ]);
        //             setSelectedFiles((prev) => [
        //                 ...prev,
        //                 {file, dataURL: reader.result},
        //             ]);
        //             // return { file, dataURL: reader.result, remove: () => removeImg(file) }
        //         };
        //         reader.readAsDataURL(file);
        //         return {file, dataURL: null};
        //     })
        // )
    };
    // Function to remove a selected image
    const removeImg = (imageFile) => {
        setSelectedFiles(selectedFiles.filter((image) => image.file.name !== imageFile.name));
    };

    return { selectedFiles, setSelectedFiles, handleImageChange, removeImg };
};

export default usePreviewImg;