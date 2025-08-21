import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../../enchanceimageApi';

function Home() {
  const [UploadImage, setUploadImage] = useState(null);
  const [EnhancedImage, setEnhancedImage] = useState(null);
  // const [Loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
  
  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
   setIsLoading(true);
    try{
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
     setIsLoading(false);
    }
    catch (error) {
            console.log(error);
            alert("Error while enhancing the image. Please try again later.");
        }
  };
    

  return (
    <>
        <ImageUpload UploadImageHandler={UploadImageHandler} />
            <ImagePreview
                loading={isLoading}
                uploaded={UploadImage}
                enhanced={EnhancedImage?.image}
            />
    </>
  )

}
export default Home