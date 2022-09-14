import React from 'react';
import Flog from '../assets/Flog.png';
import Jammming from '../assets/Jamming.png';

const Project = () => {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Project</p>
          <p className='pt-8'>// Check out some of my projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>

          <div  
          style={{ backgroundImage:`url(${Flog})`}} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-div ' >
            
            {/* Hover Effect */}
            <div className=' flex flex-col opacity-0 group-hover:opacity-100 text-center hover:bg-pink-500 w-full h-full justify-center items-center'>
              <span className='text-2xl font-bold text-gray-700 tracking-wider'>
                Flog
              </span>
              <div className='pt-8 text-center'>
                <a href="https://flog2.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/titleapt/flog2-project">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div  
          style={{ backgroundImage:`url(${Jammming})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-div '>
            
            {/* Hover Effect */}
            <div className='flex flex-col opacity-0 group-hover:opacity-100 text-center hover:bg-pink-500 w-full h-full justify-center items-center '>
              <span className='text-2xl font-bold text-gray-700 '>
                Jammming
              </span>
              <div className='mt-8 text-center'>
                <a href="http://jamming-tle.surge.sh/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/titleapt/myJamming">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Project;