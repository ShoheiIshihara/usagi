'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence  } from 'framer-motion'

import Link from 'next/link'



export default function Access() {
  
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }}    // アンマウント時
    >
      <div className="font-notosans  relative h-full bg-[#182817] ">
        <div>
          <h2 className="pt-[150px] mb-[80px] text-center text-lg">店舗情報</h2>
          <div className='mx-[30px] pb-[50px]'>
            <div className='mx-[30px] '>
              <table className='mx-auto w-full my-[30px]'>
                <thead>
                </thead>
                <tbody className='text-left text-sm'>
                  <tr className='border-b border-gray-700'>
                    <th className='p-[16px] font-normal'>店名</th>
                    <td className='py-[16px] '>ゴルフサロンうさぎ</td>
                  </tr>
                  <tr className='border-b border-gray-700'>
                    <th className='p-[16px] font-normal'>住所</th>
                    <td className='py-[16px]'>
                      <p>〒810-0002</p>
                      <p>福岡県中央区西中洲1-14</p>
                      <p>プロスペリタ西中洲７F</p>                      
                    </td>
                  </tr>
                  <tr className='border-b border-gray-700'>
                    <th className='p-[16px] font-normal'>最寄り駅</th>
                    <td className='py-[16px]'>
                      地下鉄天神南駅より徒歩４分
                    </td>
                  </tr>
                  <tr className='border-b border-gray-700'>
                    <th className='p-[16px] font-normal'>電話番号</th>
                    <td>080-7509-8080</td>
                  </tr>
                  <tr className='border-b border-gray-700'>
                    <th className='p-[16px] font-normal'>営業時間</th>
                    <td>20:00～25:00</td>
                  </tr>
                  <tr className='border-b border-gray-700'>
                    <th className='p-[16px] font-normal'>定休日</th>
                    <td className='py-[16px}'>日曜日</td>
                  </tr>
                  <tr>
                    <th className='p-[16px] font-normal'>お支払方法</th>
                    <td className='py-[16px]'>
                      <div className='mb-[5px]'>
                        <p>クレジット 可</p>
                        <p>（VISA,Master,JCB）</p>
                      </div>
                      <div>
                        <p>電子マネー 可</p>
                        <p>（PayPay）</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
          
              
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.587182389686!2d130.402923777426!3d33.59006617333441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541914cb21ae4a3%3A0x88c70ffbf2de4fe9!2z44K044Or44OV44K144Ot44OzIOOBhuOBleOBjg!5e0!3m2!1sja!2sjp!4v1684833495334!5m2!1sja!2sjp" 
                    className='w-full h-[300px] border-0' 
 
            />
            <a className='p-[10px] w-full text-center' href='https://goo.gl/maps/zxtKyHd34jPwnsK78'>
                <p className=''>Google Mapはこちらをクリック</p>
            </a>
          </div>
        </div>
      </div>
      </motion.div>

    </>


  )
}