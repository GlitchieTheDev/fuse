import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FUSE',
  description: 'Fast Untitled Search Engine (FUSE)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={inter.className + " w-full h-full"}>{children}</body>
    </html>
  )
}
