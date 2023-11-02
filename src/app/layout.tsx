import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import './globals.css'

const saira = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hideaki - Performance & Design',
  description: 'Wel com to my portfolio :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./avatar-profile.png" type="image/x-icon" />
      </head>
      <body className={saira.className}>{children}</body>
    </html>
  )
}
