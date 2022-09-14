import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/71fee245-31f8-46a3-863f-ef9766fb8be4' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-1'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the from below or shoot me in e-mail - title.apt@hotmail.com</p>
            </div>
            <input className = 'bg-[#ccd6f6] p-2'type="text" placeholder='Name' name='name' />
            <input className = 'my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name="message" rows="8"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 my-4 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact