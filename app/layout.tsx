import './globals.css'
import Header from "@/components/Header"
import { Poppins } from 'next/font/google'
import clsx from 'clsx';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Recipeasy',
  description: 'Recipeasy cooking kitchen magic ✨',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={clsx('bg-slate-50', poppins.className)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
