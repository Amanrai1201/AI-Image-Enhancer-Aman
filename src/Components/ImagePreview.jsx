import React from 'react'
import Loading from './Loading'

function ImagePreview({uploaded,enhanced,loading}) {
  console.log(uploaded,enhanced,loading);
  
  return (
    // orignal  image
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      <div className='bg-white  shadow-lg rounded-xl overflow-hidden '>
        <h2 className='font-semibold text-white text-xl text-center bg-gray-800 py-2 '>Uploaded Image</h2>
        {
         uploaded ?  <img src={uploaded} alt="" className='w-full h-full object-cover' />:
          <div className='flex  items-center justify-center h-80 bg-gray-200'>
          No Image Selected
          </div>
        }
      </div>

      <div className='bg-white  shadow-lg rounded-xl overflow-hidden '>
        <h2 className='font-semibold text-white text-xl text-center bg-blue-800 py-2 '>Enhanced Image</h2>
        {
         enhanced && !loading &&(
           <img src={enhanced} alt="" className='w-full h-full object-cover' />
         )}

         {loading ? <Loading/> :<div className='flex  items-center justify-center h-80 bg-gray-200'>
          No Enhanced Image
          </div>}
      </div>
    </div>
  )
}

export default ImagePreview