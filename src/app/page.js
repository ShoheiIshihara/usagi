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

      <div className='font-notosans  bg-[#182817]'>
        <div className=" z-0 relative bg-[url('/top/top001.jpg')] text-center bg-Cover h-[800px] bg-center">
          <div className='pt-[250px] absolute top-0 text-center leading-9 tracking-wider w-full h-full whitespace-normal px-[20px]  backdrop-brightness-[0.3]  '>
            <div className="mx-auto md:w-3/4 md:pt-[100px]">
              <p>福岡市の西中洲にあるゴルフサロン。</p>
              <p>ゴルフ好きな方々の社交場である</p>
              <p>「ゴルフサロンうさぎ」</p>
              <p>
                ジャパニーズウイスキーなど様々なお酒をご用意しており、
                一人飲みや複数飲みとしてもご利用いただけます。
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
          <div className="md:grid grid-cols-2 ">
            <h2 className='my-[80px] text-2xl text-center leading-9 tracking-wider whitespace-normal md:text-left'>
              ゴルフから<br/>
              新たな価値が生まれる空間
            </h2>
            <p className='tracking-wider whitespace-normal font-light leading-9 tracking-wider whitespace-normal px-[15px] md:px-0'>
              「ゴルフサロンうさぎ」ではお客様とのゴルフ談義を楽しむための空間づくりにこだわっています。
              <br/>
              <br/>
                店内のグリーンでパターを行える他、店内モニターではプロゴルファーの試合やコンペの映像を鑑賞する事ができ、ゴルフ以外でも店内で盛り上がる事ができるよう、カラオケや各種ミニゲームもご用意しております。
            </p>
          </div>
          <div className="flex overflow-x-scroll gap-4 pt-[30px] md:mx-auto md:pt-[80px]">
            <Image  
                src='/top/inner001.jpg'
                width={200} 
                height={50} 
                alt='inner001.jpg'
            />
            <Image  
                src='/top/inner003.jpg'

                width={200} 
                height={50} 
                alt='inner003.jpg'
            />
            <Image  
                src='/top/inner002.jpg'
                width={400} 
                height={50} 
                alt='inner003.jpg'
            />
          </div>
        </div>
      </div>
      <Footer />

      </motion.div>
    </>


  )
}
