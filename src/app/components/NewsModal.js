'use client';
import Link from 'next/link'
import Image from 'next/image';
import Linkify from 'react-linkify';
import { motion } from 'framer-motion'

export default function NewsModal(props){

    // console.log(props)
    return(
        <>
           <motion.div 
                initial={{ opacity: 0 }} // 初期状態
                animate={{ opacity: 1 }} // マウント時
                exit={{ opacity: 0 }}  
                className='fixed h-5/6 w-5/6 bg-[#0E160B] z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-opacity-95 overflow-auto'
            >
                <div className='flex justify-end  '>
                    <button className='w-[80px] h-[80px] flex justify-center items-center relative' onClick={() => props.setIsNewsOpen(false)}>
                        <div className="w-8 h-0.5 bg-gray-300 transform rotate-45 absolute"></div>
                        <div className="w-8 h-0.5 bg-gray-300 transform -rotate-45 absolute"></div>
                    </button>
                </div>
                
                    <div className='mx-[30px]'>
                        <div className='text-xl mb-[10px]'>{props.selectContet.title}</div>
                        <div className='text-xs text-gray-300 '>
                            <span>{props.selectContet.add_date}</span>
                            <span className=' ml-[10px]'>{props.selectContet.genre =='event' ? 'イベント情報':'お知らせ' }</span>
                        </div>
                        <div className='my-[30px] text-sm w-full whitespace-pre-line leading-relaxed tracking-wider'><Linkify>{props.selectContet.content}</Linkify></div>
                       
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

                        <div className='border w-5/6 my-[20px] text-center mx-auto'>
                            <a href={`tel:+818075098080`}>
                                <p className='pt-[20px] text-[#F2C224]'>ご予約・お問い合わせ</p>
                                <p className='pb-[20px] leading-9 tracking-widest'>Tel:<span className='text-xl tracking-[0.1em]'>080-7509-8080</span></p>
                            </a>
                        </div>
                  
                    </div>
            </motion.div>
        </>
    )
}