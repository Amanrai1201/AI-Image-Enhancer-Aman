import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center items-center py-6 h-full'>
        <div className='animate-spin  scale-100  border-t-transparent border-4 w-[5vmax] h-[5vmax] rounded-full mb-6 border-blue-300'></div>
    </div>
  )
}

export default Loading