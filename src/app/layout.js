

import './globals.css'

import { Inter } from 'next/font/google'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ゴルフサロンうさぎ | 西中州バー',
  description: '福岡市の西中州にあるゴルフバー「ゴルフサロンうさぎ」です。ゴルフ好きな人はもちろんゴルフをしたことがない人でもゆっくりと飲める空間をご提供しております。市営地下鉄天神南駅より徒歩4分',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
       
              {children}

        
        </body>
    </html>
  )
}
