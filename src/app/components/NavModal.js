'use client';
import Link from 'next/link'
import Image from 'next/image';
import { motion } from 'framer-motion'

export default function NavModal(props){

    return(
        <>
           <motion.div 
                initial={{ opacity: 0 }} // 初期状態
                animate={{ opacity: 1 }} // マウント時
                exit={{ opacity: 0 }}  
      
            >
                <div className='overflow-scroll'>
                <div className='flex justify-end'>
                    <button className='w-[80px] h-[80px] flex justify-center items-center relative' onClick={() => props.setIsNavOpen(false)}>
                        <div className="w-8 h-0.5 bg-gray-300 transform rotate-45 absolute"></div>
                        <div className="w-8 h-0.5 bg-gray-300 transform -rotate-45 absolute"></div>
                    </button>
                </div>
                
                    <div className=''>
                        <div className=' mt-[30px] flex gap-3 justify-center'>
                            <a className='p-[10px]' href='https://www.facebook.com/profile.php?id=100063821100744'>
                                <Image  
                                    src='/social/social_facebook.png'
                                    width={50} 
                                    height={50} 
                                    alt='facebook_logo'
                                />
                            </a>
                            <a className='p-[10px]' href='https://www.instagram.com/golf_salon_usagi/?igshid=YmMyMTA2M2Y%3D'>
                                <Image  
                                    src='/social/social_insta.png'
                                    width={50} 
                                    height={50} 
                                    alt='instagram_logo'
                                />
                            </a>
                            <a className='p-[10px]' href='https://lin.ee/RCsMGWU'>
                                <Image  
                                    src='/social/social_line.png'
                                    width={50} 
                                    height={50} 
                                    alt='line_logo'
                                />
                            </a>
                        </div>

                        <div className='border m-[50px] text-center'>
                            <a href={`tel:+818075098080`}>
                                <p className='pt-[20px] text-[#F2C224]'>ご予約・お問い合わせ</p>
                                <p className='pb-[20px] leading-9 tracking-widest'>Tel:<span className='text-xl tracking-[0.2em]'>080-7509-8080</span></p>
                            </a>
                        </div>

                        <div className='flex justify-center w-full'>
                            <ul className='text-center'>
                                <li className='my-[20px] text-xl'>
                                <Link href="/">
                                    <button className='px-[30px] py-[10px]' onClick={() =>  props.setIsNavOpen(false)}>TOP</button>
                                </Link>
                                </li>
                                <li  className='my-[20px] text-xl'>
                                <Link href="/about">
                                    <button className='px-[30px] py-[10px]' onClick={() =>  props.setIsNavOpen(false)}>ABOUT</button>
                                </Link>
                                </li>
                                <li  className='my-[20px] text-xl'>
                                <Link href="/menu">
                                    <button className='px-[30px] py-[10px]' onClick={() =>  props.setIsNavOpen(false)}>MENU</button>
                                </Link>
                                </li>
                                <li  className='my-[20px] text-xl'>
                                <Link href="/news">
                                    <button className='px-[30px] py-[10px]' onClick={() =>  props.setIsNavOpen(false)}>NEWS</button>
                                </Link>
                                </li>
                                <li  className='my-[20px] text-xl'>
                                <Link href="/access">
                                    <button className='px-[30px] py-[10px]' onClick={() =>  props.setIsNavOpen(false)}>ACCESS</button>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
            </motion.div>
        </>
    )
}