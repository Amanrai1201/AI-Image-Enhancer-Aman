import React from 'react'
import Home from './Components/Home'

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-16 px-4 bg-gray-100'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 py-10 '>AI Image Enhancer</h1>
        <h4 className='text-2xl font-medium text-gray-600 mb-5'> Upload your Image and let AI enhancce it for you!</h4>
      </div>
      <Home/>
    </div>
  )
}

export default App

// ID d541e2d2-bf8d-46f6-b26f-5859346a5441