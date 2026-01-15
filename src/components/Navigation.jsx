import React from 'react'

function Navigation() {
    return (
        <div className='w-full flex justify-center my-4'>
            <ul className='fixed w-auto bg-[rgba(0,0,0,0.7)] shadow-[8px 8px 16px 0px rgba(0, 0, 0, 0.5)] backdrop-blur-md rounded-full py-2 px-8 flex justify-center items-center gap-12 font-netflix z-50'>
                <a className='text-text-secondary hover:text-white transition-all duration-300 text-paragraph font-medium' href="/">Home</a>
                <a className='text-text-secondary hover:text-white transition-all duration-300 text-paragraph font-medium' href="#">About</a>
                <a className='text-text-secondary hover:text-white transition-all duration-300 text-paragraph font-medium' href="#">Features</a>
                <a className='text-text-secondary hover:text-white transition-all duration-300 text-paragraph font-medium' href="#">Signup</a>
            </ul>
        </div>
    )
}

export default Navigation
