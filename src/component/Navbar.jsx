import React, { useState } from 'react'
import { FaBars, FaTimes , FaGithub , FaLinkedin, FaFacebook , FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>

            </div>

            {/* menu */}
                <ul className='hidden md:flex'>
                    <li> 
                        <Link to="home" smooth={true} duration={500}>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                        About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                        Skill
                        </Link>
                    </li>
                    <li>
                        <Link to="project" smooth={true} duration={500}>
                        Project
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={500}>
                        Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                        Contact
                        </Link>
                    </li>
                </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile Menu */}
       
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skill
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="project" smooth={true} duration={500}>
                        Project
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="experience" smooth={true} duration={500}>
                        Experience
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link></li>
            </ul>
        
            {/* Social Icon */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/apisit-tanapichartsakul-14a392248/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/titleapt">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.canva.com/design/DAD5JdjEMZQ/Q2He-TuCAl1RVwOFyC8IwA/view?utm_content=DAD5JdjEMZQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
            </div>
        </div>
    );
};

export default Navbar;