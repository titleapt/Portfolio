import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1080px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1080px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                       <p>Hi my name is Apisit Tanapichartsakul, nice to meet you</p> 
                    </div>
                    <div>
                    <p>I graduated from the Faculty of Information Science. At that time, 
        I wasn't ready to find a job and came across the project. Generation Thailand which I have learned skills from many speakers. 
        Whether it's professional, action skills, or how to work with others using agility. and, I am still fully committed to development. 
        My Technical Skills and Soft Skills Hopefully, I will use this knowledge to improve your organization for better productivity in the future.</p>  
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default About