'use client';
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react'
import { motion } from 'framer-motion'


import NavModal from './NavModal';

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false)

    return(
        <>
            <div className=' h-[80px] bg-white/5 fixed  top-0 left-0 w-full text-gray-200 z-10 '>
                <div className='flex justify-between  backdrop backdrop-blur-sm md:w-4/5 md:mx-auto md:'>
                    <Link href="/">
                        <Image  
                            src='/logo.png'
                            width={80} 
                            height={150} 
                            alt='Logo'
                        />
                    </Link>
                    <Link href="/" className=' font-notosefif flex justify-center items-center leading-9 tracking-wider text-lg md:text-2xl md:'>
                        <p className=''>GOLF salon USAGI </p>
                    </Link>
                    <div className='font-notosefif  hidden justify-center items-center leading-9 tracking-wider  md:flex md:'>
                        <button className='hover:opacity-50 mx-[4px] p-[5px]'>
                            <Link href="/" >
                                <p>HOME</p>
                            </Link>
                        </button>
                        <button className='hover:opacity-50 mx-[4px] p-[5px]'>
                            <Link href="/about">
                                <p>ABOUT</p>
                            </Link>
                        </button>
                        <button  className='hover:opacity-50 mx-[4px] p-[5px]'>
                            <Link href="/menu">
                                <p>MENU</p>
                            </Link>
                        </button>
                        <button  className='hover:opacity-50 mx-[4px] p-[5px]'>
                            <Link href="/news">
                                <p>NEWS</p>
                            </Link>
                        </button>
                        <button  className='hover:opacity-50 ml-[4px] p-[5px]'>
                            <Link href="/access">
                                <p>ACCESS</p>
                            </Link>
                        </button>
                    </div>

                    <button type="button" className="flex justify-center items-center w-[80px]  md:hidden" onClick={() => setIsNavOpen(true)}>
                        <div className="space-y-2">
                            <div className="w-8 h-0.5 bg-gray-300" />
                            <div className="w-8 h-0.5 bg-gray-300" />
                            <div className="w-8 h-0.5 bg-gray-300" />
                        </div>
                    </button>
                </div>
            </div>
        {isNavOpen ? 
            <div className='fixed h-screen w-screen bg-[#0E160B] z-20'>
                <NavModal   setIsNavOpen={setIsNavOpen}/>
            </div> : ""}
        
      </>
    )
}