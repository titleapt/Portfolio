import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1080px] mx-auto px-10 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Apisit Tanapichartsakul
          </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        I'm a Junior Software Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'> 
        </p>
        
      </div>

    </div>
  )
}

export default Home