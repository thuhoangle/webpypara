import { useState } from 'react';
import useShowToast from './useShowToast';
import axios from 'axios';

const usePreviewImg = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const showToast = useShowToast();
  const maxFileSizeInBytes = 5 * 1024 * 1024; // 5MB

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (!files || files.length === 0) {
      showToast('Error', 'Please select an image file', 'error');
      setSelectedFiles([]);
      return;
    }

    if (files.length + selectedFiles.length > 3) {
      showToast('Error', `You can only upload 3 images at a time.`, 'error');
      return;
    }

    const validImg = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        if (file.size > maxFileSizeInBytes) {
          showToast(
            'Error',
            `File "${file.name}" size must be less than 5MB`,
            'error'
          );
          continue;
        }
        validImg.push(file);
      } else {
        showToast('Error', `File "${file.name}" is not an image file`, 'error');
      }
    }

    const filePromises = validImg.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve({ file, dataURL: reader.result });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(filePromises)
      .then((files) => {
        setSelectedFiles((prevSelectedFiles) => [
          ...prevSelectedFiles,
          ...files,
        ]);
      })
      .catch((error) => {
        showToast('Error', error.message, 'error');
      });
  };

  const removeImg = (imageFile) => {
    setSelectedFiles(
      selectedFiles.filter((image) => image.file.name !== imageFile.name)
    );
  };

  const uploadImages = async (selectedFiles) => {
    const postURLs = [];

    try {
      for (const { file } of selectedFiles) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post(
          'https://uploadservice-66ibb6pdga-uc.a.run.app/cloud-storage',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            maxBodyLength: Infinity,
          }
        );

        if (response.status === 200) {
          const signURL = response.data.signURL;
          postURLs.push(signURL);
        } else {
          throw new Error('Upload failed');
        }
      }

      return postURLs;
    } catch (error) {
      throw new Error(`Error uploading images: ${error.message}`);
    }
  };

  return {
    selectedFiles,
    setSelectedFiles,
    handleImageChange,
    removeImg,
    uploadImages,
  };
};

export default usePreviewImg;
