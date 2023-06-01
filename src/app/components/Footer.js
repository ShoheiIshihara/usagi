'use client';
import Image from 'next/image';
import Link from 'next/link'

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

            <div className="w-full hidden md:block bg-[#1b1715] font-notosefif ">
                <div className='w-4/5 mx-auto flex justify-between py-[10px]'>
                    <div className='flex'>
                        <Image  
                            src='/logo.png'
                            width={200} 
                            height={300} 
                            alt='Logo'
                            className=''
                        />
                        <div>
                            <a href={`tel:+818075098080`}>
                                <p className='pt-[20px] pb-[10px] leading-9 tracking-widest '>Tel:<span className='text-xl tracking-[0.2em]'>080-7509-8080</span></p>
                            </a>
                            <p>&#12306;810-0002</p>
                            <p>福岡県福岡市中央区西中州1-14プロスペリタ西中洲7F</p>
                            <p>営業時間　20:00～25:00</p>
                            <p>定休日　日曜日</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <a className='p-[10px]' href='https://www.facebook.com/profile.php?id=100063821100744'>
                            <Image  
                                src='/social/social_facebook.png'
                                width={40} 
                                height={40} 
                                alt='facebook_logo'
                            />
                        </a>
                        <a className='p-[10px]' href='https://www.instagram.com/golf_salon_usagi/?igshid=YmMyMTA2M2Y%3D'>
                            <Image  
                                src='/social/social_instagram.png'
                                width={40} 
                                height={40} 
                                alt='instagram_logo'
                            />
                        </a>
                        <a className='p-[10px]' href='https://lin.ee/RCsMGWU'>
                            <Image  
                                src='/social/social_line.png'
                                width={40} 
                                height={40} 
                                alt='line_logo'
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-[#787878] bg-[#1b1715] text-center pb-2">&copy; 2023 株式会社A.F.コンサベーション</div>

        </>
    )
}