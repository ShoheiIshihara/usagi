'use client';
import { motion, AnimatePresence  } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Menu() {
  return (
    <>
     <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }}    // アンマウント時
    >
            <Header />

      <div className="font-notosans relative h-full bg-[#182817]">
        <div className='mx-[10px] md:w-4/5 md:mx-auto'>
          <h2 className="pt-[150px] mb-[100px] text-center text-lg md:text-2xl md:text-left">メニュー</h2>
          <div className='mx-auto '>
            <div className=' mx-[30px] mb-[20px] py-[50px] drop-shadow-lg'>
              <h3 className='text-center text-xl font-notosefif font-light md:text-2xl'>飲み放題</h3>
              <table className='mx-auto w-full md:w-2/3 md:text-center md:text-xl md:mt-[50px]'>
                <thead></thead>
                <tbody className='font-thin font-notosefif text-center'>
                  <tr>
                    <td></td>
                    <td className='py-[40px] pb-[10px] text-center'>男性</td>
                    <td className='py-[40px] pb-[10px] text-center'>女性</td>
                  </tr>
                  <tr className='border-b border-gray-600'>
                    <td className='py-[20px]  md:py-[40px] '>60min</td>
                    <td className='py-[20px] md:py-[40px] '>3,300yen</td>
                    <td className='py-[20px] md:py-[40px]  text-center pl-[6px]'>1,700yen</td>
                  </tr>
                  <tr className='border-b border-gray-600'>
                    <td className='py-[20px]  md:py-[40px] '>120min</td>
                    <td className='py-[20px] md:py-[40px] '>5,500yen</td>
                    <td className='py-[20px] md:py-[40px]  text-center pl-[6px]'>2,200yen</td>
                  </tr>
                  <tr className='border-b border-gray-600'>
                    <td className='py-[15px] md:py-[40px]  '>Open
                      <span className='md:hidden'><br/></span>
                        ～
                      <span className='md:hidden'><br/></span>
                        Last
                    </td>
                    <td className='py-[15px] md:py-[40px] '>11,000yen</td>
                    <td className='py-[15px] md:py-[40px]  text-center pl-[6px]'>5,500yen</td>
                  </tr>
                  <tr className=''>
                    <td className='py-[15px] md:py-[40px] '>延長<br/>60min</td>
                    <td className='py-[15px] md:py-[40px]  '>2,800yen</td>
                    <td className='py-[15px] md:py-[40px]  text-center pl-[6px]'>1,100yen</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className='pt-[40px] md:pt-[70px]'>
                      <div className='text-sm  border-4 border-double px-3'>
                        <ul className='grid grid-cols-2 text-left md:text-xl'>
                          <li className='py-[6px]'>・ビール</li>
                          <li className='py-[6px]'>・ハイボール</li>
                          <li className='py-[6px]'>・焼酎</li>
                          <li className='py-[6px]'>・ウイスキー</li>
                          <li className='py-[6px]'>・ワイン</li>
                          <li className='py-[6px]'>・ソフトドリンク</li>
                          <li className='col-span-2 py-[6px] text-'>・サワー（オレンジ / レモン）</li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='mt-[150px] '>
              <h3 className='text-xl text-center mb-[20px] font-notosefif md:text-2xl'>DRINK MENU</h3>
              <p className='text-sm text-center font-light mb-[20px] font-notosefif md:text-base'>Charge　1,100yen</p>
              <div className='mx-[40px] md:text-xl'>
                <table className='mx-auto w-full md:w-2/3'>
                  <thead></thead>
                  <tbody className='font-light font-notosefif'>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px] '>ビール</td>
                      <td className='text-right tracking-wider'>990<span className='text-xs'>yen　</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>ウィスキー<p className='text-xs pl-[16px] font-thin'>角 / 白州 / 山崎 各種</p></td>
                      <td className='text-right tracking-wider'>880<span className='text-xs'>yen～</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>サワー<p className='text-xs pl-[16px] font-thin'>レモン / ライム / カルピス 各種</p></td>
                      <td className='text-right tracking-wider'>880<span className='text-xs'>yen～</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>焼酎<p className='text-xs pl-[16px] font-thin'>麦 / 芋 / 米 各種</p></td>
                      <td className='text-right tracking-wider'>770<span className='text-xs'>yen　</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>カクテル<p className='text-xs pl-[16px] font-thin'>ジン / ウォッカ / ラム 各種</p></td>
                      <td className='text-right tracking-wider'>990<span className='text-xs'>yen～</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>シャンパン</td>
                      <td className='text-right tracking-wider'>1,100<span className='text-xs'>yen</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>ワイン<p className='text-xs pl-[16px] font-thin'>赤 / 白 / ロゼ</p></td>
                      <td className='text-right tracking-wider'>990<span className='text-xs'>yen～</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>ショット</td>
                      <td className='text-right tracking-wider'>550<span className='text-xs'>yen　</span></td>
                    </tr>
                    <tr className=''>
                      <td className='py-[10px]'>ソフトドリンク<p className='text-xs pl-[16px] font-thin'>コーラ/ジンジャエール/ウーロン茶</p></td>
                      <td className='text-right tracking-wider'>660<span className='text-xs'>yen　</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='mt-[150px] font-notosefif'>
                <h3 className='text-xl text-center mb-[30px]  tracking-wider md:text-2xl'>FOOD MENU</h3>
                <p className='text-xl text-center  tracking-widest  md:text-2xl'>お好きな2品で770yen</p>
                <div className='mx-auto mt-[40px] border-y w-1/2 md:text-xl'>
                  <ul className='text-center md:py-[30px]'>
                    <li className='mt-[10px]'>ミックスナッツ</li>
                    <li className='mt-[10px]'>柿の種</li>
                    <li className='mt-[10px]'>ビーフジャーキー</li>
                    <li className='mt-[10px]'>ポテトチップス</li>
                    <li className='my-[10px]'>チョコレート</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className='text-center mt-[100px] pb-[50px] font-notosefif'>※当店は税込価格表記です。</p>
          </div>
        </div>
      </div>
      <Footer />

      </motion.div>
    </>


  )
}