import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className='flex justify-center items-center w-screen h-[50vh] flex-col'>
       <div className=''>
        <h1 className='font-bold text-5xl bg-gradient-to-b from-neutral-700 to-neutral-50 bg-clip-text text-transparent p-4 text-center' >HIMANSHU GUPTA</h1>
        <p className='p-4 text-xl bg-gradient-to-r from-gray-600  bg-clip-text  text-transparent  to-gray-300  text-center'>I am skilled in building full-stack applications, handling both frontend and backend development efficiently.</p>
       </div>
       <div className='flex mt-10'>
        <Link href="mailto:gupta.him31@gmail.com">
          <button className='bg-gray-300 w-[9rem] p-4 rounded-xl mr-4 hover:scale-110 text-black font-semibold'>Contact Me</button>
          </Link>
          <Link href={"/projects"}>
          <button className='bg-blue-400 w-[9rem] p-4 rounded-xl ml-4 hover:scale-110 font-semibold'>View Projects</button>
          </Link>
       </div>
    </div>
  )
}

export default HeroSection