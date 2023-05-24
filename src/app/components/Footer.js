'use client';
import Image from 'next/image';
export default function Footer(){
    return(
        <>
            <div className="w-full text-center py-[30px] bg-[#1b1715] text-sm  md:hidden ">
                {/* <img className='w-[200px] mx-auto' src='logo.png' /> */}
                <Image  
                            src='/logo.png'
                            width={200} 
                            height={300} 
                            alt='Logo'
                            className='mx-auto'
                        />
                <div className="mb-[30px]">
                    <p>営業時間</p>
                    <p>20:00～25:00</p>
                </div>
                <div className="mb-[30px]">
                    <p>定休日</p>
                    <p>日曜日</p>
                </div>
                <div className="mb-[30px]">
                    <p>店名</p>
                    <p>ゴルフサロンうさぎ</p>
                </div>
                <div className="mb-[30px]">
                    <p>所在地</p>
                    <p>&#12306;810-0002</p>
                    <p>福岡県福岡市中央区西中州1-14</p>
                    <p>プロスペリタ西中洲7F</p>
                </div>
                <div className="mb-[30px]">
                    <p>アクセス</p>
                    <p>福岡市営下鉄天神南駅より徒歩４分</p>
                </div>
                <div className="mb-[30px]">
                    <p>クレジット</p>
                    <p>可（VISA,Master,JCB）</p>
                </div>
                <div className="mb-[40px]">
                    <p>電子マネー</p>
                    <p>可（PayPay）</p>
                </div>
            </div>

            <div className="w-full hidden md:block">
                <div>test</div>
            </div>

            <div className="text-[#787878] bg-[#1b1715] text-center pb-2">&copy; 2023 株式会社A.F.コンサベーション</div>

        </>
    )
}