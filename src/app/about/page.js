'use client';
import Image from 'next/image';
import { motion, AnimatePresence  } from 'framer-motion'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
    return (
        <>
            <motion.div
             initial={{ opacity: 0 }} // 初期状態
             animate={{ opacity: 1 }} // マウント時
             exit={{ opacity: 0 }}    // アンマウント時
            
            >
            <Header />
            <div className="font-notosefif z-0 relative  bg-[#182817 ">
                <div className=" px-[20px] md:w-4/5 md:mx-auto">
                    <h2 className="pt-[150px] mb-[50px] text-center text-lg md:text-2xl md:text-left">代表あいさつ</h2>
                    <div className='md:flex justify-evenly flex-row-reverse md:mt-[150px]'>
                        <Image 
                            src='/about/owner001.jpg'
                            width={350} 
                            height={200} 
                            alt='about_image'
                            className='mx-auto md:mx-0'
                        />

                        <h2 className='my-[80px] text-2xl text-center leading-9 tracking-wider whitespace-normal md:text-left'>
                            ゴルフから繋がりが<br/>
                            生まれる空間を
                        </h2>
                    </div>
                    <div className='tracking-wider whitespace-normal font-light leading-9 tracking-wider whitespace-normal indent-4 md:mt-[150px]'>
                        <p className='mb-6'>
                            私はゴルフが大好きで、「周りのゴルフ好きな人達を繋げたい」という想いを実現させるため、
                            「ゴルフサロンうさぎ」をオープンしました。ゴルフ好きな方々だけでなく、
                            未経験者も一緒に楽しむことができ、始めるきっかけにもなっていただけたらと思います。
                        </p>
                        <p className='mb-6'>
                            店内にグリーンを設け、パターを楽しむ事ができます。
                            お客様とのゴルフ談義をより楽しむための空間作りにこだわりました。
                        </p>
                        <p className='pb-[150px]'>
                            うさぎでの出会いを通して、ゴルフの魅力を皆様と一緒に深めていきたいです。
                        </p>
                    </div>                    
                </div>
            </div>
            <Footer />
            </motion.div>
        </>
    )
}