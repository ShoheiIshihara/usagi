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
            <div className=' h-[80px] bg-white/5 fixed  top-0 left-0 w-full text-gray-200 z-10'>
                <div className='flex justify-between backdrop backdrop-blur-sm'>
                    <Link href="/">
                        <Image  
                            src='/logo.png'
                            width={80} 
                            height={150} 
                            alt='Logo'
                        />
                    </Link>
                    <p className=' font-notosefif mx-auto flex justify-center items-center leading-9 tracking-wider text-lg'>GOLF salon USAGI </p>
                    <ul className='flex hidden md:block'>
                        <li>
                        <Link href="/">
                            <p>HOME</p>
                        </Link>
                        </li>
                        <li>
                        <Link href="/about">
                            <p>about</p>
                        </Link>
                        </li>
                        <li>
                        <Link href="/menu">
                            <p>MENU</p>
                        </Link>
                        </li>
                    </ul>

                    <button type="button" className="flex justify-center items-center w-[80px]  md:hidden" onClick={() => setIsNavOpen(true)}>
                        <div className="space-y-2">
                            <div className="w-8 h-0.5 bg-gray-300" />
                            <div className="w-8 h-0.5 bg-gray-300" />
                            <div className="w-8 h-0.5 bg-gray-300" />
                        </div>
                    </button>
                </div>
            </div>

            {/* MOdal Nav */}
            {/* <motion.div className={isNavOpen ? "fixed  h-screen w-screen bg-[#0E160B] " : "hidden "}
                initial={{ opacity: 0 }} // 初期状態
                animate={{ opacity: 1 }} // マウント時
                exit={{ opacity: 0 }}  
            >
                
                    <div className=' '>
                        <div className='flex justify-end'>
                            <button className='w-[80px] h-[80px] flex justify-center items-center relative' onClick={() => setIsNavOpen(false)}>
                                <div className="w-8 h-0.5 bg-gray-300 transform rotate-45 absolute"></div>
                                <div className="w-8 h-0.5 bg-gray-300 transform -rotate-45 absolute"></div>
                            </button>
                        </div>

                        <div className=' mt-[30px] flex gap-3 justify-center'>
                            <a className='p-[10px]' href='https://www.facebook.com/profile.php?id=100063821100744'>
                                <Image  
                                    src='/social_facebook.png'
                                    width={50} 
                                    height={50} 
                                    alt='facebook_logo'
                                />
                            </a>
                            <a className='p-[10px]' href='https://www.instagram.com/golf_salon_usagi/?igshid=YmMyMTA2M2Y%3D'>
                                <Image  
                                    src='/social_instagram.png'
                                    width={50} 
                                    height={50} 
                                    alt='instagram_logo'
                                />
                            </a>
                            <a className='p-[10px]' href='https://lin.ee/RCsMGWU'>
                                <Image  
                                    src='/social_line.png'
                                    width={50} 
                                    height={50} 
                                    alt='line_logo'
                                />
                            </a>
                        </div>

                        <div className='border m-[50px] text-center'>
                            <p className='pt-[20px] text-[#F2C224]'>ご予約・お問い合わせ</p>
                            <p className='pb-[20px] leading-9 tracking-widest'>Tel:<span className='text-xl tracking-[0.2em]'>090-0000-1111</span></p>
                        </div>

                        <div className='flex justify-center w-full'>
                            <ul className='text-center'>
                                <li className='my-[20px] text-xl'>
                                <Link href="/">
                                    <button className='px-[30px] py-[10px]' onClick={() => setIsNavOpen(false)}>TOP</button>
                                </Link>
                                </li>
                                <li  className='my-[20px] text-xl'>
                                <Link href="/about">
                                    <button className='px-[30px] py-[10px]' onClick={() => setIsNavOpen(false)}>ABOUT</button>
                                </Link>
                                </li>
                                <li  className='my-[20px] text-xl'>
                                <Link href="/menu">
                                    <button className='px-[30px] py-[10px]' onClick={() => setIsNavOpen(false)}>MENU</button>
                                </Link>
                                </li>
                                <li  className='my-[20px] text-xl'>
                                <Link href="/event">
                                    <button className='px-[30px] py-[10px]' onClick={() => setIsNavOpen(false)}>EVENT</button>
                                </Link>
                                </li>
                                <li  className='my-[20px] text-xl'>
                                <Link href="/access">
                                    <button className='px-[30px] py-[10px]' onClick={() => setIsNavOpen(false)}>ACCESS</button>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </motion.div> */}
        {isNavOpen ? 
            <div className='fixed h-screen w-screen bg-[#0E160B] z-20'>
                <NavModal   setIsNavOpen={setIsNavOpen}/>
            </div> : ""}
        
      </>
    )
}