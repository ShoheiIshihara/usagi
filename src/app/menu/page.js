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
        <div className='mx-[10px]'>
          <h2 className="pt-[150px] mb-[100px] text-center text-lg">メニュー</h2>
          <div className='mx-auto '>
            <div className='mx-auto my-[20px] py-[50px] drop-shadow-lg'>
              <h3 className='text-center text-xl font-notosefif font-light '>飲み放題</h3>
              <table className='mx-auto'>
                <thead></thead>
                <tbody className='font-thin font-notosefif'>
                  <tr >
                    <td className='pt-[40px] pl-[10px]'>60min</td>
                    <td className='pt-[40px] pl-[10px]'>男性 3,300yen</td>
                    <td className='pt-[40px] pl-[10px]'>女性 1,700yen</td>
                  </tr>
                  <tr>
                    <td className='pt-[40px] pl-[10px]'>120min</td>
                    <td className='pt-[40px] pl-[10px]'>男性 5,500yen</td>
                    <td className='pt-[40px] pl-[10px]'>女性 2,200yen</td>
                  </tr>
                  <tr className=''>
                    <td className='pt-[40px]  pl-[10px]'>延長60min</td>
                    <td className='pt-[40px]  pl-[10px]'>男性 2,800yen</td>
                    <td className='pt-[40px]  pl-[10px]'>女性 1,100yen</td>
                  </tr>
                  <tr>
                    <td className='pt-[40px] pl-[10px]'>Open～Last</td>
                    <td className='pt-[40px] pl-[10px]'>男性 11,000yen</td>
                    <td className='pt-[40px] pl-[10px]'>女性 5,500yen</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className='pt-[40px]'>
                      <div className='text-sm  text-xs border-4 border-double p-3 m-2 '>
                        <ul className='grid grid-cols-2 gap-1 '>
                          <li className='pl-[10px]'>ビール</li>
                          <li>ハイボール</li>
                          <li className='pl-[10px]'>焼酎</li>
                          <li>ウイスキー</li>
                          <li className='pl-[10px]'>ワイン</li>
                          <li>サワー（オレンジ / レモン）</li>
                          <li className='pl-[10px]'>ソフトドリンク</li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='mt-[150px] '>
              <h3 className='text-xl text-center mb-[20px] font-notosefif'>DRINK MENU</h3>
              <p className='text-sm text-center font-light mb-[20px] font-notosefif'>Charge　1,100yen</p>
              <div className='mx-[50px]'>
                <table className='mx-auto w-full'>
                  <thead></thead>
                  <tbody className='font-light font-notosefif'>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px] '>ビール</td>
                      <td className='text-right tracking-wider'>880<span className='text-xs'>yen　</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>ウィスキー<p className='text-xs pl-[16px] font-thin'>角 / 白州 / 山崎 各種</p></td>
                      <td className='text-right tracking-wider'>850<span className='text-xs'>yen～</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>サワー<p className='text-xs pl-[16px] font-thin'>レモン / ライム / カルピス 各種</p></td>
                      <td className='text-right tracking-wider'>880<span className='text-xs'>yen～</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>焼酎<p className='text-xs pl-[16px] font-thin'>麦 / 芋 / 米 各種</p></td>
                      <td className='text-right tracking-wider'>700<span className='text-xs'>yen　</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>カクテル<p className='text-xs pl-[16px] font-thin'>ジン / ウォッカ / ラム 各種</p></td>
                      <td className='text-right tracking-wider'>900<span className='text-xs'>yen～</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>シャンパン</td>
                      <td className='text-right tracking-wider'>1,000<span className='text-xs'>yen～</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>ワイン<p className='text-xs pl-[16px] font-thin'>赤 / 白 / ロゼ</p></td>
                      <td className='text-right tracking-wider'>900<span className='text-xs'>yen～</span></td>
                    </tr>
                    <tr className='border-b border-gray-600'>
                      <td className='py-[10px]'>ショット</td>
                      <td className='text-right tracking-wider'>550<span className='text-xs'>yen　</span></td>
                    </tr>
                    <tr className=''>
                      <td className='py-[10px]'>ソフトドリンク<p className='text-xs pl-[16px] font-thin'>コーラ/ジンジャエール/ウーロン茶</p></td>
                      <td className='text-right tracking-wider'>600<span className='text-xs'>yen　</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='mt-[150px] font-notosefif'>
                <h3 className='text-xl text-center mb-[30px]  tracking-wider '>FOOD MENU</h3>
                <p className='text-xl text-center  tracking-widest'>お好きな2品で770yen</p>
                <div className='mx-auto mt-[40px] border-y w-1/2'>
                  <ul className='text-center'>
                    <li className='mt-[10px]'>ミックスナッツ</li>
                    <li className='mt-[10px]'>柿の種</li>
                    <li className='mt-[10px]'>ビーフジャーキー</li>
                    <li className='mt-[10px]'>ポテトチップス</li>
                    <li className='my-[10px]'>チョコレート</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className='text-center mt-[100px] pb-[50px]'>※当店は税込価格表記です。</p>
          </div>
        </div>
      </div>
      <Footer />

      </motion.div>
    </>


  )
}