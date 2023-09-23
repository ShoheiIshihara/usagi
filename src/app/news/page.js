'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence  } from 'framer-motion'

import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewsModal from '../components/NewsModal'


export default function News() {
  //スプレットシートからニュース一覧を取得
  const API_KEY = 'AIzaSyA0dln1d4m0XuvYXveaHm-Gw5emYhrv_js'
  const API_SPREADSHEET_ID = '125T7epCNmxkjrfgTMISKLGzxrMXL3WJV42O-bVPZO-w'
  const API_SHEETNAME = 'news_data'
  // https://sheets.googleapis.com/v4/spreadsheets/125T7epCNmxkjrfgTMISKLGzxrMXL3WJV42O-bVPZO-w/values/news_data?key=AIzaSyA0dln1d4m0XuvYXveaHm-Gw5emYhrv_js

  const [datas, setDatas] = useState([]);
  const [indicateDic, setIndcateDic ] = useState([]);
  const [ moreCount, setMoreCount ] = useState(1);
  const conversionJsonToDic = (props) => {
    const [header, ...rows] = props;
    return rows.map((row) =>
      row.reduce((acc, cell, i) => ({ ...acc, [header[i]]: cell }), {})
    );
  }

  useEffect(() => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${API_SPREADSHEET_ID}/values/${API_SHEETNAME}?key=${API_KEY}`)
        .then(res => res.json())
        .then(datas => {
          setDatas(conversionJsonToDic(datas.values).reverse())        
    })

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${API_SPREADSHEET_ID}/values/${API_SHEETNAME}?key=${API_KEY}`)
    .then(res => res.json())
    .then(datas => {
      setIndcateDic(conversionJsonToDic(datas.values).reverse().slice(0,3))

    
    })
  }, [])

  let indicatedDicCount = 3
  // console.log(datas)

  function makeIndcateDic(){
    let itemsDisplayed = indicatedDicCount + (moreCount * 3)
    setIndcateDic(datas.slice(0,itemsDisplayed))
  
  }
  
  function moreButtonClick(){
    setMoreCount(moreCount + 1)
    makeIndcateDic()
  }
  
  // console.log(moreCount);
  // console.log(datas.slice(0,indicatedDicCount))

  // setIndcateDic(datas.slice(0,indicatedDicCount))

  // console.log(indicateDic)


  const [ isNewsOpen, setIsNewsOpen ] = useState(false) 
  const [ selectContet, setSelectContent ] = useState({"id":'',"add_date":'',"genre":'', "title":'',"event_date":"","contet":''})
  // console.log(isNewsOpen);
  // console.log(selectContet)

  function content_indcate( id, add_date, genre, title, content) {
    setIsNewsOpen(true)
    // console.log(id,title)
    setSelectContent({"id":id,"add_date":add_date,"genre":genre, "title":title,"content":content})

  }
  // console.log(indicateDic.length, datas.length);

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }}    // アンマウント時
    >
    <Header />

      <div className="font-notosefif  relative h-full bg-[#182817 ">
        <div className='md:w-4/5 md:mx-auto'>
          <h2 className="pt-[150px] mb-[80px] text-center text-lg md:text-2xl md:text-left">お知らせ</h2>
          <div className='mx-[30px] pb-[50px]'>
            <div className=' leading-8 tracking-wider text-sm md:text-lg'>
              {indicateDic.map((data,i) => 
                <button type='button' key={i} onClick={ () => content_indcate(data.ID,data.add_date,data.genre,data.title,data.content)} className='block my-[30px]'>
                    <div className='text-start hover:underline underline-offset-1'>
                      {data.add_date}<span className='ml-[10px]'>{data.genre =='event' ? 'イベント情報':'お知らせ'}</span>
                      <p className='ml-[16px] md:inline'>{data.title}</p>
                      <p className='ml-[16px] md:inline'>{data.event_date}</p>
                    </div>
                </button>
                )}
            </div>
            <button
              className={`text-center w-full border py-[10px] mt-[80px] tracking-widest hover:text-gray-300 md:mb-[550px] ${indicateDic.length == datas.length ? 'opacity-0':''}`}
              onClick={() => moreButtonClick()}>MORE</button>
          </div>
        </div>
      </div>
      {isNewsOpen ? 
            
                <NewsModal   setIsNewsOpen={setIsNewsOpen} selectContet={selectContet} />
            : ""}
      <Footer />

      </motion.div>
    </>


  )
}