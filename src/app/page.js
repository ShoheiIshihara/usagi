'use client';
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

import Link from 'next/link'
import Image from 'next/image';

import Header from './components/Header'
import Footer from './components/Footer'


export default function Home() {

  const API_KEY = 'AIzaSyA0dln1d4m0XuvYXveaHm-Gw5emYhrv_js'
  const API_SPREADSHEET_ID = '125T7epCNmxkjrfgTMISKLGzxrMXL3WJV42O-bVPZO-w'
  const API_SHEETNAME = 'news_data'
  const [datas, setDatas] = useState([{"id":'',"add_date":'',"genre":'', "title":'',"event_date":'',"contet":''}]);
  const conversionJsonToDic = (props) => {
    const [header, ...rows] = props;
    return rows.map((row) =>
      row.reduce((acc, cell, i) => ({ ...acc, [header[i]]: cell }), {})
    );
  }
  useEffect(() => {
    (async () => {
      await getSpData();
    })();
  }, []);

  function getSpData(){
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${API_SPREADSHEET_ID}/values/${API_SHEETNAME}?key=${API_KEY}`)
        .then(res => res.json())
        .then(datas => {
          setDatas(conversionJsonToDic(datas.values).reverse().shift()) 
    })
  }
  // console.log(datas);

  const [array, setArray] = useState(["top001","top002"])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(oldCount => {
        if (oldCount < array.length - 1) return oldCount + 1;
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [array.length]);


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }} // 初期状態
        animate={{ opacity: 1 }} // マウント時
        exit={{ opacity: 0 }}    // アンマウント時
      >
      <Header />

      <div className='font-notosefif  bg-[#182817 '>
        <div className=" z-0 relative bg-[url('/top/top001r01.jpg')] text-center bg-Cover h-[800px] bg-center">
          <div className='pt-[200px] absolute top-0 text-center leading-9 tracking-wider w-full h-full whitespace-normal px-[20px]  backdrop-brightness-[0.4]  '>
            <div className="mx-auto md:w-3/4 md:pt-[100px] text-shadow-md">
              <p>福岡市西中洲にあるゴルフサロン。</p>
              <p>ゴルフ好きな方々の社交場である</p>
              <p>「ゴルフサロンうさぎ」</p>
              <p>
                ジャパニーズウイスキーなど様々なお酒をご用意しており、
                落ち着いた店内でおひとりからでもお気軽にご利用いただけます。
              </p>
              <div className="mt-[60px] text-sm">
                <p className="border mx-[80px] py-[5px] md:w-[200px] md:mx-auto">新着のお知らせ</p>
                  <p className="pt-[10px] md:my-[20px]">{datas.title}</p>
                  <Link href="/news">
                      <button className='px-[30px] py-[10px] hover:opacity-70' >＞＞詳細はこちら</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      
        <div className='py-[100px] px-[10px] md:w-4/5 md:mx-auto'>
          <div className=" grid-cols-2 ">
            <h2 className='my-[80px] text-2xl text-center leading-9 tracking-wider whitespace-normal md:text-left'>
              当店の楽しみ方
            </h2>
            <div className="xl:flex gap-[25px]">
              <div>
                <p  className='mt-[80px] tracking-wider whitespace-normal font-light text-center leading-9 tracking-wider whitespace-normal px-[15px] md:px-0'>
                    ～ 1人でふらっと、お酒を楽しむ ～
                </p>
                <Image  
                        src='/top/fun001.jpg'
                        width={400} 
                        height={50} 
                        alt='一人で楽しむ.jpg'
                        className="mx-auto"
                        
                        />
              </div>
              <div>
                <p  className='mt-[80px] tracking-wider whitespace-normal font-light text-center leading-9 tracking-wider whitespace-normal px-[15px] md:px-0'>
                ～ 気の合う仲間と大切な時間を楽しむ ～
                </p>
                <Image  
                        src='/top/top_fun002.jpg'
                        width={400} 
                        height={50} 
                        alt='気の合う仲間.jpg'
                        className="mx-auto"
                        
                        />
              </div>
              <div>
                <p  className='mt-[80px] tracking-wider whitespace-normal font-light text-center leading-9 tracking-wider whitespace-normal px-[15px] md:px-0'>
                    ～ 出会いを、楽しむ ～
                </p>
                <Image  
                        src='/top/top_fun003.jpg'
                        width={400} 
                        height={50} 
                        alt='出会いを楽しむ.jpg'
                        className="mx-auto"
                        />
              </div>
            </div>

            <p className='mt-[80px] tracking-wider whitespace-normal font-light leading-9 tracking-wider whitespace-normal px-[15px] md:px-0'>
              「ゴルフサロンうさぎ」ではお客様の大切な時間を過ごすために空間づくりにこだわっています。
            </p>
            <div className=" mx-auto flex overflow-x-scroll gap-4 pt-[80px] md:mx-auto md:pt-[80px] hidden-scrollbar">
              <Image    
                  src='/top/top_fun005.jpg'
                  width={350} 
                  height={50} 
                  alt='店内雰囲気001.jpg'
              />
              <Image  
                  src='/top/inner005.jpg'
                  width={350} 
                  height={50} 
                  alt='店内雰囲気002.jpg'
              />
              <Image  
                    src='/top/inner002r1.jpg'
                    width={350} 
                    height={50} 
                    alt='店内雰囲気003.jpg'
                />
               
              <Image  
                  src='/top/inner006r1.jpg'

                  width={180} 
                  height={50} 
                  alt='店内雰囲気004.jpg'
              />
          </div>
              
            <p  className='mt-[80px] whitespace-normal font-light leading-9 tracking-wider whitespace-normal px-[15px] md:px-0'>
                ゴルフ以外でも店内で盛り上がる事ができるよう、<br className="hidden md:block"/>カラオケや各種ミニゲームもご用意しておりますので、
                ゴルフ未経験の方でも気兼ねなくご来店いただけます。
            </p>
          </div>
          <div className="flex overflow-x-scroll gap-4 pt-[80px] pb-[80px] md:mx-auto md:pt-[80px] hidden-scrollbar">
            <Image  
                src='/top/top_golf001.jpg'
                width={180} 
                height={50} 
                alt='店内備付001.jpg'
            />
            <Image  
                src='/top/inner001.jpg'
                width={180} 
                height={50} 
                alt='店内備付002.jpg'
            />
            <Image  
                  src='/top/inner004.jpg'
                  width={180} 
                  height={50} 
                  alt='店内備付003.jpg'
              />
            <Image  
                src='/top/inner003.jpg'

                width={400} 
                height={50} 
                alt='店内備付004.jpg'
            />
            <Image  
                src='/top/fun005r1.jpg'
                width={400} 
                height={50} 
                alt='店内備付005.jpg'
            />
          </div>
          <div className=' tracking-wider md:hidden'>
            <p className="text-center mb-[20px]">各種SNSはこちら</p>
            <div className="flex gap-3 justify-center">
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
                      src='/social/social_Insta.png'
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
        </div>
        </div>
      </div>
      <Footer />
      </motion.div>
    </>

  )
}
