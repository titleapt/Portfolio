import React from 'react'
import Ahead from '../assets/ahead.jpg'
import Gen from '../assets/gen.png'

function Experience() {
    return (
        <div name='experience' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1080px] mx-auto px-4 pt-20 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                    Experience
                    </p>
                    <p className='py-6'>My Experience</p>
                </div>

                <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div
                        style={{ backgroundImage: `url(${Gen})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div'
                        >
                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            {/* <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span> */}
                            <div className='pt-8 text-center'>
                                {/* <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Ahead})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div'>
                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            {/* <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span> */}
                            <div className='pt-8 text-center'>
                                {/* <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience