'use client';
import Image from 'next/image';
import { motion, AnimatePresence  } from 'framer-motion'

export default function About(){
    return (
        <>
            <motion.div
             initial={{ opacity: 0 }} // 初期状態
             animate={{ opacity: 1 }} // マウント時
             exit={{ opacity: 0 }}    // アンマウント時
            >
            <div className="font-notosans z-[-1] relative h-full bg-[#182817]">
                <div className=" px-[20px] ">
                    <h2 className="pt-[150px] mb-[50px] text-center text-lg">代表あいさつ</h2>
                    <Image 
                        src='/about/0002.jpg'
                        width={300} 
                        height={300} 
                        alt='about_image'
                        className='mx-auto'
                    />

                    <h2 className='my-[80px] text-2xl text-center leading-9 tracking-wider whitespace-normal'>
                        ゴルフから繋がりが<br/>
                        生まれる空間を
                    </h2>
                    <div className='tracking-wider whitespace-normal font-light leading-9 tracking-wider whitespace-normal indent-4'>
                        <p className='mb-6'>
                            私はゴルフが大好きで、「周りのゴルフ好きな人達を繋げたい」という想いを実現させるため、
                            「ゴルフスナックうさぎ」をオープンしました。ゴルフ好きな方々だけでなく、
                            未経験者も一緒に楽しむことができ、始めるきっかけにもなっていただけたらと思います。
                        </p>
                        <p className='mb-6'>
                            モニターで試合やコンペのプレー映像を流すことが出来る他、店内にグリーンを設け、
                            パターを楽しむ事ができます。お客様とのゴルフ談義をより楽しむための空間作りにこだわりました。
                        </p>
                        <p className='pb-[150px]'>
                            うさぎでの出会いを通して、ゴルフの魅力を皆様と一緒に深めていきたいです。
                        </p>
                    </div>                    
                </div>
            </div>
            </motion.div>
        </>
    )
}