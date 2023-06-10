import './globals.css'
import { Inter } from 'next/font/google'

// import icon from '../../public/LOGO.png'icon

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  // icons: {
  //   icon: {icon},
  // },
  title: 'Wisdomfy',
  description: 'Wisdom is Knowhance Demo Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
